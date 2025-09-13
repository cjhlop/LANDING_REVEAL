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
  // 3D positioning calculations
  const zIndex = 10 - stackIndex;
  const translateX = stackIndex * 60; // More spacing for 3D effect
  const translateY = stackIndex * -70; // More vertical offset
  const translateZ = stackIndex * -90; // Add Z-depth
  const rotateY = stackIndex * -8; // Rotate cards in 3D space
  const scale = 1 - (stackIndex * 0.08); // More dramatic scaling
  const opacity = isActive ? 1 : 0.9 - (stackIndex * 0.15);

  return (
    <div
      {...rest}
      className={cn(
        "absolute top-1/2 left-1/2 rounded-xl border border-white bg-white shadow-2xl transition-all duration-700 ease-out",
        "[transform-style:preserve-3d] [backface-visibility:hidden]",
        className
      )}
      style={{
        transform: `translate(-50%, -50%) translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
        zIndex,
        opacity,
        transformOrigin: 'center center',
        boxShadow: `0 ${20 + stackIndex * 10}px ${40 + stackIndex * 20}px rgba(0, 0, 0, ${0.1 + stackIndex * 0.05})`,
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
      style={{ 
        width, 
        height,
        perspective: '1200px', // Add 3D perspective
        transformStyle: 'preserve-3d'
      }}
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
            className="overflow-hidden flex flex-col"
          >
            {child}
          </Card>
        );
      })}
    </div>
  );
};

export default CardSwap;