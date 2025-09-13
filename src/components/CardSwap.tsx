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

  const notifyParent = useCallback((index: number) => {
    if (onCardOrderChange) {
      console.log('Notifying parent: front card is', index);
      onCardOrderChange(index);
    }
  }, [onCardOrderChange]);

  // Initialize card positions
  useEffect(() => {
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

    // Notify parent of initial state
    notifyParent(0);
  }, [refs, cardDistance, verticalDistance, skewAmount, notifyParent]);

  // Handle card cycling
  useEffect(() => {
    const cycle = () => {
      const nextIndex = (frontCardIndex + 1) % childArr.length;
      
      // Update state first (this will trigger content change)
      setFrontCardIndex(nextIndex);
      notifyParent(nextIndex);
      
      // Then animate the visual change
      const currentFrontCard = refs[frontCardIndex].current;
      if (currentFrontCard) {
        // Animate current front card to the back
        gsap.to(currentFrontCard, {
          y: '+=500',
          duration: 1.0,
          ease: 'power2.inOut',
          onComplete: () => {
            // Move it to the back position
            const backPosition = childArr.length - 1;
            const x = backPosition * cardDistance;
            const y = -backPosition * verticalDistance;
            const z = -backPosition * cardDistance * 1.5;
            const zIndex = refs.length - backPosition;
            
            gsap.set(currentFrontCard, {
              x,
              y,
              z,
              zIndex,
              force3D: true
            });
          }
        });
      }
      
      // Move all other cards forward
      refs.forEach((ref, originalIndex) => {
        if (originalIndex === frontCardIndex || !ref.current) return;
        
        // Calculate new position (move forward by 1)
        let newStackPosition = originalIndex;
        if (originalIndex > frontCardIndex) {
          newStackPosition = originalIndex - 1;
        } else {
          newStackPosition = originalIndex + childArr.length - 1;
        }
        
        const x = newStackPosition * cardDistance;
        const y = -newStackPosition * verticalDistance;
        const z = -newStackPosition * cardDistance * 1.5;
        const zIndex = refs.length - newStackPosition;
        
        gsap.to(ref.current, {
          x,
          y,
          z,
          zIndex,
          duration: 0.8,
          ease: 'power2.inOut'
        });
      });
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