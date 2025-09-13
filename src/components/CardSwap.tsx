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
  useCallback,
  useState
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
  const refs = useMemo<RefObject<HTMLDivElement>[]>(() => childArr.map(() => React.createRef<HTMLDivElement>()), [childArr.length]);

  const [frontCardIndex, setFrontCardIndex] = useState(0);
  const intervalRef = useRef<number>();
  const container = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const notifyParent = useCallback((index: number) => {
    if (onCardOrderChange) {
      console.log('Notifying parent: front card is', index);
      onCardOrderChange(index);
    }
  }, [onCardOrderChange]);

  // Set initial positions for all cards
  const setInitialPositions = useCallback(() => {
    refs.forEach((ref, index) => {
      if (!ref.current) return;
      
      const stackPosition = index;
      const x = stackPosition * cardDistance;
      const y = -stackPosition * verticalDistance;
      const z = -stackPosition * cardDistance * 1.5;
      const zIndex = refs.length - stackPosition;
      
      gsap.set(ref.current, {
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
    });
  }, [refs, cardDistance, verticalDistance, skewAmount]);

  // Initialize
  useEffect(() => {
    setInitialPositions();
    notifyParent(0);
  }, [setInitialPositions, notifyParent]);

  // Handle cycling
  useEffect(() => {
    const cycle = () => {
      if (isAnimating.current) return;
      
      isAnimating.current = true;
      const nextIndex = (frontCardIndex + 1) % childArr.length;
      
      // Update content immediately
      setFrontCardIndex(nextIndex);
      notifyParent(nextIndex);
      
      // Simple animation: just move the current front card down and reset positions
      const currentFrontCard = refs[frontCardIndex].current;
      if (currentFrontCard) {
        gsap.to(currentFrontCard, {
          y: '+=400',
          opacity: 0.5,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            // Reset all positions based on new front card
            refs.forEach((ref, originalIndex) => {
              if (!ref.current) return;
              
              // Calculate new stack position relative to nextIndex
              let newStackPosition;
              if (originalIndex === nextIndex) {
                newStackPosition = 0; // This is now the front card
              } else if (originalIndex > nextIndex) {
                newStackPosition = originalIndex - nextIndex;
              } else {
                newStackPosition = refs.length - nextIndex + originalIndex;
              }
              
              const x = newStackPosition * cardDistance;
              const y = -newStackPosition * verticalDistance;
              const z = -newStackPosition * cardDistance * 1.5;
              const zIndex = refs.length - newStackPosition;
              
              gsap.set(ref.current, {
                x,
                y,
                z,
                zIndex,
                opacity: 1,
                force3D: true
              });
            });
            
            isAnimating.current = false;
          }
        });
      } else {
        isAnimating.current = false;
      }
    };

    intervalRef.current = window.setInterval(cycle, delay);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [frontCardIndex, childArr.length, refs, cardDistance, verticalDistance, delay, notifyParent]);

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