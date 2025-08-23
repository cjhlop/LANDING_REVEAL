import React from 'react';
import { StarRating } from './StarRating';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  rating?: number;
  avatarUrl?: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  testimonial,
  rating = 5,
  avatarUrl,
  className = "",
}) => {
  // Generate a random avatar color if no URL is provided
  const avatarColors = [
    'bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 
    'bg-purple-400', 'bg-pink-400', 'bg-indigo-400', 'bg-teal-400'
  ];
  const randomColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];

  return (
    <div 
      className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative ${className}`}
      role="article"
      aria-label={`Testimonial from ${name}`}
    >
      {/* Quote icon in top right */}
      <div className="absolute top-4 right-4">
        <Quote className="h-6 w-6 text-gray-300" aria-hidden="true" />
      </div>

      {/* User info section */}
      <div className="flex items-center gap-4 mb-6">
        {/* Avatar */}
        <div className="relative">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={`${name}'s avatar`}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className={`w-12 h-12 rounded-full ${randomColor} flex items-center justify-center`}>
              <span className="text-white font-semibold text-lg">
                {name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>

        {/* Name and rating */}
        <div className="flex-1">
          <h3 className="font-urbanist text-lg font-semibold text-testimonial-name leading-tight">
            {name}
          </h3>
          <StarRating rating={rating} className="mt-1" />
        </div>
      </div>

      {/* Divider line */}
      <div className="w-full h-px bg-testimonial-border mb-6" />

      {/* Testimonial text */}
      <p className="font-inter text-[17px] font-medium text-testimonial-text leading-relaxed">
        {testimonial}
      </p>
    </div>
  );
};