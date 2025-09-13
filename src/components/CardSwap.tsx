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
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (i: number, distX: number, distY: number, total: number): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

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

  // Track the current front card index (0-based, matches the original card order)
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

  useEffect(() => {
    const total = refs.length;
    
    // Initial placement - card 0 is in front
    refs.forEach((r, i) => {
      if (r.current) {
        placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount);
      }
    });

    // Notify parent of initial front card (card 0)
    frontCardIndex.current = 0;
    notifyParent();

    const swap = () => {
      if (isAnimating.current || refs.length < 2) return;
      
      isAnimating.current = true;
      
      // Find the current front card element
      const currentFrontRef = refs[frontCardIndex.current];
      const elFront = currentFrontRef.current;
      if (!elFront) {
        isAnimating.current = false;
        return;
      }
      
      const tl = gsap.timeline({
        onComplete: () => {
          // Move to next card (cycle through 0, 1, 2, 3, 0, 1, 2, 3...)
          frontCardIndex.current = (frontCardIndex.current + 1) % refs.length;
          console.log('Animation complete, new front card:', frontCardIndex.current);
          notifyParent();
          isAnimating.current = false;
        }
      });

      // Drop the current front card
      tl.to(elFront, {
        y: '+=500',
        duration: 1.5,
        ease: 'power2.inOut'
      });

      // Move all other cards forward by one position
      refs.forEach((ref, originalIndex) => {
        if (originalIndex === frontCardIndex.current) return; // Skip the dropping card
        
        const el = ref.current;
        if (!el) return;
        
        // Calculate current position of this card
        const currentPos = getCurrentPosition(originalIndex, frontCardIndex.current, refs.length);
        const newPos = currentPos - 1; // Move forward by one position
        
        if (newPos >= 0) {
          const slot = makeSlot(newPos, cardDistance, verticalDistance, refs.length);
          tl.set(el, { zIndex: slot.zIndex }, '-=1.2');
          tl.to(
            el,
            {
              x: slot.x,
              y: slot.y,
              z: slot.z,
              duration: 1.2,
              ease: 'power2.inOut'
            },
            '-=1.2'
          );
        }
      });

      // Move the dropped card to the back
      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.set(elFront, { zIndex: backSlot.zIndex }, '-=0.8');
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: 1.2,
          ease: 'power2.inOut'
        },
        '-=0.8'
      );
    };

    // Start the cycle
    intervalRef.current = window.setInterval(swap, delay);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [refs, cardDistance, verticalDistance, delay, skewAmount, notifyParent]);

  // Helper function to calculate current position of a card
  const getCurrentPosition = (originalIndex: number, currentFrontIndex: number, total: number): number => {
    if (originalIndex === currentFrontIndex) return 0; // Front card
    
    // Calculate relative position
    let pos = originalIndex - currentFrontIndex;
    if (pos < 0) pos += total;
    
    return pos;
  };

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