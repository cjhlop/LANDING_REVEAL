import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating?: number;
  maxRating?: number;
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({ 
  rating = 5, 
  maxRating = 5, 
  className = "" 
}) => {
  return (
    <div className={`flex items-center gap-1 ${className}`} role="img" aria-label={`${rating} out of ${maxRating} stars`}>
      {Array.from({ length: maxRating }, (_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating 
              ? 'fill-testimonial-star text-testimonial-star' 
              : 'fill-gray-200 text-gray-200'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};