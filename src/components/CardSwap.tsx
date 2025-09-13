import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  delay?: number;
  onCardOrderChange?: (frontCardIndex: number) => void;
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  stackIndex?: number;
}

export const Card: React.FC<CardProps> = ({ 
  className, 
  isActive = false, 
  stackIndex = 0, 
  children,
  ...rest 
}) => {
  const zIndex = 10 - stackIndex;
  const translateX = stackIndex * 20;
  const translateY = stackIndex * -30;
  const scale = 1 - (stackIndex * 0.05);
  const opacity = isActive ? 1 : 0.8 - (stackIndex * 0.1);

  return (
    <div
      {...rest}
      className={cn(
        "absolute top-1/2 left-1/2 rounded-xl border border-white bg-white shadow-lg transition-all duration-700 ease-out",
        className
      )}
      style={{
        transform: `translate(-50%, -50%) translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
        zIndex,
        opacity,
        transformOrigin: 'center center',
      }}
    >
      {children}
    </div>
  );
};

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  delay = 5000,
  onCardOrderChange,
  children
}) => {
  const childrenArray = React.Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Notify parent when active card changes
  useEffect(() => {
    if (onCardOrderChange) {
      onCardOrderChange(activeIndex);
    }
  }, [activeIndex, onCardOrderChange]);

  // Set up auto-cycling
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % childrenArray.length);
    }, delay);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [delay, childrenArray.length]);

  return (
    <div
      className="absolute bottom-0 right-0 transform translate-x-[5%] translate-y-[20%] origin-bottom-right overflow-visible max-[768px]:translate-x-[25%] max-[768px]:translate-y-[25%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[25%] max-[480px]:translate-y-[25%] max-[480px]:scale-[0.55]"
      style={{ width, height }}
    >
      {childrenArray.map((child, index) => {
        // Calculate stack position relative to active card
        let stackIndex;
        if (index === activeIndex) {
          stackIndex = 0; // Front card
        } else if (index > activeIndex) {
          stackIndex = index - activeIndex;
        } else {
          stackIndex = childrenArray.length - activeIndex + index;
        }

        return (
          <Card
            key={index}
            isActive={index === activeIndex}
            stackIndex={stackIndex}
            style={{ width, height }}
            className="overflow-hidden shadow-lg flex flex-col"
          >
            {child}
          </Card>
        );
      })}
    </div>
  );
};

export default CardSwap;