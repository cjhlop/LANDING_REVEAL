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

  // Track the order of cards from front to back
  const [cardOrder, setCardOrder] = useState<number[]>(() => 
    Array.from({ length: childArr.length }, (_, i) => i)
  );
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  // Get position for a card at given stack position (0 = front, 1 = second, etc.)
  const getPositionForStackIndex = useCallback((stackIndex: number) => {
    return {
      x: stackIndex * cardDistance,
      y: -stackIndex * verticalDistance,
      z: -stackIndex * cardDistance * 1.5,
      zIndex: childArr.length - stackIndex
    };
  }, [cardDistance, verticalDistance, childArr.length]);

  // Position all cards based on current order
  const positionAllCards = useCallback((animate: boolean = false) => {
    cardOrder.forEach((cardIndex, stackIndex) => {
      const ref = refs[cardIndex];
      if (!ref.current) return;
      
      const position = getPositionForStackIndex(stackIndex);
      
      if (animate) {
        gsap.to(ref.current, {
          x: position.x,
          y: position.y,
          z: position.z,
          zIndex: position.zIndex,
          duration: 0.8,
          ease: 'power2.inOut',
          force3D: true
        });
      } else {
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
      }
    });
  }, [cardOrder, refs, getPositionForStackIndex, skewAmount]);

  // Initialize cards
  useEffect(() => {
    positionAllCards(false);
    
    // Notify parent of initial front card
    if (onCardOrderChange) {
      onCardOrderChange(cardOrder[0]);
    }
  }, [positionAllCards, onCardOrderChange, cardOrder]);

  // Cycle to next card
  const cycleCards = useCallback(() => {
    if (isAnimating.current) return;
    
    isAnimating.current = true;
    
    const oldFrontCard = cardOrder[0];
    const frontCardRef = refs[oldFrontCard];
    
    if (!frontCardRef.current) {
      isAnimating.current = false;
      return;
    }
    
    // Step 1: Front card slides down
    gsap.to(frontCardRef.current, {
      y: '+=300',
      opacity: 0.3,
      duration: 0.6,
      ease: 'power2.in',
      onComplete: () => {
        
        // Step 2: All other cards slide forward smoothly
        const timeline = gsap.timeline({
          onComplete: () => {
            
            // Step 3: Update state and notify parent (this changes content)
            const newOrder = [...cardOrder.slice(1), cardOrder[0]];
            setCardOrder(newOrder);
            if (onCardOrderChange) {
              onCardOrderChange(newOrder[0]);
            }
            
            // Step 4: Move old front card to back position
            const backPosition = getPositionForStackIndex(childArr.length - 1);
            gsap.to(frontCardRef.current, {
              x: backPosition.x,
              y: backPosition.y,
              z: backPosition.z,
              zIndex: backPosition.zIndex,
              opacity: 1,
              duration: 0.4,
              ease: 'power2.out',
              force3D: true,
              onComplete: () => {
                isAnimating.current = false;
              }
            });
          }
        });
        
        // Animate each remaining card forward by one position
        cardOrder.slice(1).forEach((cardIndex, index) => {
          const ref = refs[cardIndex];
          if (!ref.current) return;
          
          // Move from current position (index + 1) to new position (index)
          const newPosition = getPositionForStackIndex(index);
          
          timeline.to(ref.current, {
            x: newPosition.x,
            y: newPosition.y,
            z: newPosition.z,
            zIndex: newPosition.zIndex,
            duration: 0.7,
            ease: 'power2.out',
            force3D: true
          }, 0); // All start at the same time
        });
      }
    });
  }, [cardOrder, refs, getPositionForStackIndex, onCardOrderChange, childArr.length]);

  // Set up interval
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

  // Cleanup
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