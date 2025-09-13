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

  const [currentFrontIndex, setCurrentFrontIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const container = useRef<HTMLDivElement>(null);

  // Calculate position for a card at given stack position
  const getCardPosition = useCallback((stackPosition: number) => {
    return {
      x: stackPosition * cardDistance,
      y: -stackPosition * verticalDistance,
      z: -stackPosition * cardDistance * 1.5,
      zIndex: childArr.length - stackPosition
    };
  }, [cardDistance, verticalDistance, childArr.length]);

  // Set initial positions for all cards
  const initializeCards = useCallback(() => {
    refs.forEach((ref, index) => {
      if (!ref.current) return;
      
      const position = getCardPosition(index);
      
      gsap.set(ref.current, {
        x: position.x,
        y: position.y,
        z: position.z,
        xPercent: -50,
        yPercent: -50,
        skewY: skewAmount,
        transformOrigin: 'center center',
        zIndex: position.zIndex,
        force3D: true,
        opacity: 1
      });
    });
  }, [refs, getCardPosition, skewAmount]);

  // Move a card to a specific stack position
  const moveCardToPosition = useCallback((cardRef: RefObject<HTMLDivElement>, stackPosition: number, duration: number = 0.8) => {
    if (!cardRef.current) return Promise.resolve();
    
    const position = getCardPosition(stackPosition);
    
    return new Promise<void>((resolve) => {
      gsap.to(cardRef.current, {
        x: position.x,
        y: position.y,
        z: position.z,
        zIndex: position.zIndex,
        duration,
        ease: 'power2.inOut',
        force3D: true,
        onComplete: resolve
      });
    });
  }, [getCardPosition]);

  // Cycle to next card
  const cycleCards = useCallback(() => {
    const nextFrontIndex = (currentFrontIndex + 1) % childArr.length;
    
    // Update state immediately (this triggers content change)
    setCurrentFrontIndex(nextFrontIndex);
    
    // Notify parent immediately
    if (onCardOrderChange) {
      onCardOrderChange(nextFrontIndex);
    }
    
    // Animate the current front card to the back
    const currentFrontCard = refs[currentFrontIndex];
    if (currentFrontCard.current) {
      // First move it down and fade it
      gsap.to(currentFrontCard.current, {
        y: '+=300',
        opacity: 0.3,
        duration: 0.6,
        ease: 'power2.in',
        onComplete: () => {
          // Then move it to the back position
          moveCardToPosition(currentFrontCard, childArr.length - 1, 0.4).then(() => {
            // Restore opacity
            gsap.set(currentFrontCard.current, { opacity: 1 });
          });
        }
      });
    }
    
    // Move all other cards forward by one position
    refs.forEach((ref, originalIndex) => {
      if (originalIndex === currentFrontIndex) return; // Skip the card we just moved
      
      // Calculate new stack position (move forward by 1)
      let newStackPosition;
      if (originalIndex < currentFrontIndex) {
        newStackPosition = originalIndex;
      } else {
        newStackPosition = originalIndex - 1;
      }
      
      moveCardToPosition(ref, newStackPosition, 0.8);
    });
    
  }, [currentFrontIndex, childArr.length, refs, onCardOrderChange, moveCardToPosition]);

  // Initialize cards on mount
  useEffect(() => {
    initializeCards();
    
    // Notify parent of initial state
    if (onCardOrderChange) {
      onCardOrderChange(0);
    }
  }, [initializeCards, onCardOrderChange]);

  // Set up cycling interval
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(cycleCards, delay);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [cycleCards, delay]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

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