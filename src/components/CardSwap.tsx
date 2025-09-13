import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useCallback
} from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  onCardOrderChange?: (frontCardIndex: number) => void;
  skewAmount?: number;
  easing?: 'linear' | 'elastic';
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={cn(
      "absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden]",
      className
    )}
  />
));
Card.displayName = 'Card';

type CardRef = RefObject<HTMLDivElement>;

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  onCardOrderChange,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  const childArr = useMemo(() => Children.toArray(children) as ReactElement<CardProps>[], [children]);
  const refs = useMemo<CardRef[]>(() => childArr.map(() => React.createRef<HTMLDivElement>()), [childArr.length]);

  // Simple counter that tracks which card should be in front
  const frontCardIndex = useRef<number>(0);
  const intervalRef = useRef<number>();
  const container = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const notifyParent = useCallback(() => {
    if (onCardOrderChange) {
      console.log('Notifying parent: front card is', frontCardIndex.current);
      onCardOrderChange(frontCardIndex.current);
    }
  }, [onCardOrderChange]);

  // Position a card at a specific stack position
  const positionCard = (cardRef: CardRef, stackPosition: number) => {
    if (!cardRef.current) return;
    
    const x = stackPosition * cardDistance;
    const y = -stackPosition * verticalDistance;
    const z = -stackPosition * cardDistance * 1.5;
    const zIndex = refs.length - stackPosition;
    
    gsap.set(cardRef.current, {
      x,
      y,
      z,
      xPercent: -50,
      yPercent: -50,
      skewY: skewAmount,
      transformOrigin: 'center center',
      zIndex,
      force3D: true
    });
  };

  // Arrange all cards based on current front card
  const arrangeCards = () => {
    refs.forEach((ref, originalIndex) => {
      // Calculate stack position for this card
      let stackPosition;
      if (originalIndex === frontCardIndex.current) {
        stackPosition = 0; // Front card
      } else if (originalIndex > frontCardIndex.current) {
        stackPosition = originalIndex - frontCardIndex.current;
      } else {
        stackPosition = refs.length - frontCardIndex.current + originalIndex;
      }
      
      positionCard(ref, stackPosition);
    });
  };

  useEffect(() => {
    // Initial setup
    frontCardIndex.current = 0;
    arrangeCards();
    notifyParent();

    const swap = () => {
      if (isAnimating.current || refs.length < 2) return;
      
      isAnimating.current = true;
      
      // Get current front card
      const currentFrontRef = refs[frontCardIndex.current];
      if (!currentFrontRef.current) {
        isAnimating.current = false;
        return;
      }
      
      // Calculate what the next front card will be
      const nextFrontIndex = (frontCardIndex.current + 1) % refs.length;
      
      // Animate current front card dropping down
      const tl = gsap.timeline({
        onComplete: () => {
          // NOW update to next front card and notify parent
          frontCardIndex.current = nextFrontIndex;
          notifyParent();
          
          // Rearrange all cards to new positions
          arrangeCards();
          isAnimating.current = false;
        }
      });
      
      // Drop the old front card
      tl.to(currentFrontRef.current, {
        y: '+=500',
        duration: 1.0,
        ease: 'power2.inOut'
      });
      
      // Move all other cards to their new positions based on nextFrontIndex
      refs.forEach((ref, originalIndex) => {
        if (originalIndex === frontCardIndex.current) return; // Skip dropping card
        
        if (!ref.current) return;
        
        // Calculate new stack position based on nextFrontIndex
        let newStackPosition;
        if (originalIndex === nextFrontIndex) {
          newStackPosition = 0; // New front card
        } else if (originalIndex > nextFrontIndex) {
          newStackPosition = originalIndex - nextFrontIndex;
        } else {
          newStackPosition = refs.length - nextFrontIndex + originalIndex;
        }
        
        const x = newStackPosition * cardDistance;
        const y = -newStackPosition * verticalDistance;
        const z = -newStackPosition * cardDistance * 1.5;
        const zIndex = refs.length - newStackPosition;
        
        tl.set(ref.current, { zIndex }, '-=0.8');
        tl.to(ref.current, {
          x,
          y,
          z,
          duration: 0.8,
          ease: 'power2.inOut'
        }, '-=0.8');
      });
    };

    // Start the cycle
    intervalRef.current = window.setInterval(swap, delay);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [refs, cardDistance, verticalDistance, delay, skewAmount, notifyParent]);

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: e => {
            child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
            onCardClick?.(i);
          }
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child
  );

  return (
    <div
      ref={container}
      className="absolute bottom-0 right-0 transform translate-x-[5%] translate-y-[20%] origin-bottom-right perspective-[900px] overflow-visible max-[768px]:translate-x-[25%] max-[768px]:translate-y-[25%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[25%] max-[480px]:translate-y-[25%] max-[480px]:scale-[0.55]"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;