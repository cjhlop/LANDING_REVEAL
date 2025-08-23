import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { Smile } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Emma Johnson",
      testimonial: "Capable has truly transformed my social life. I've connected with amazing people and discovered new interests. Highly recommended!",
      rating: 5,
    },
    {
      name: "John Doe",
      testimonial: "The intuitive design and smart features of Capable made it easy to find meaningful connections. It's become my go-to app.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      testimonial: "I love how Capable helps me stay in touch with friends and meet new people. The app is user-friendly and effective.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      testimonial: "With Capable, I've expanded my network and found genuine connections. The seamless interface makes socializing so much easier.",
      rating: 5,
    },
    {
      name: "David Wilson",
      testimonial: "Capable's features are fantastic for both meeting new people and staying connected with existing friends. It's a must-have app.",
      rating: 5,
    },
    {
      name: "Laura Martinez",
      testimonial: "I'm amazed at how Capable's advanced privacy controls and customizable features have enhanced my online social experience. Truly innovative.",
      rating: 5,
    },
    {
      name: "James Taylor",
      testimonial: "The community support and engaging multimedia sharing on Capable have made it my favorite platform for connecting and sharing.",
      rating: 5,
    },
    {
      name: "Olivia Anderson",
      testimonial: "Capable has made socializing more enjoyable and efficient. The personalized experience helps me connect with others who share my interests.",
      rating: 5,
    },
  ];

  return (
    <section className="relative w-full py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge with smiley icon */}
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-full border border-gray-200 mb-6">
            <Smile className="h-5 w-5 text-gray-600" aria-hidden="true" />
            <span className="font-inter text-base font-medium text-testimonial-text">
              Our Testimonials
            </span>
          </div>

          {/* Main heading */}
          <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[58px] font-bold text-testimonial-dark leading-tight mb-6">
            User Reviews and Feedback
          </h2>

          {/* Description */}
          <p className="font-inter text-lg font-medium text-testimonial-gray leading-relaxed max-w-2xl mx-auto">
            See how Capable has transformed users' social experiences through<br />
            their own words.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* Testimonials container with horizontal scroll */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {/* First row */}
              <div className="flex flex-col gap-6">
                {testimonials.slice(0, 4).map((testimonial, index) => (
                  <TestimonialCard
                    key={`row1-${index}`}
                    name={testimonial.name}
                    testimonial={testimonial.testimonial}
                    rating={testimonial.rating}
                    className="w-[345px] flex-shrink-0"
                  />
                ))}
              </div>

              {/* Second row */}
              <div className="flex flex-col gap-6">
                {testimonials.slice(4, 8).map((testimonial, index) => (
                  <TestimonialCard
                    key={`row2-${index}`}
                    name={testimonial.name}
                    testimonial={testimonial.testimonial}
                    rating={testimonial.rating}
                    className="w-[345px] flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop grid layout (hidden on mobile) */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-6">
              {/* First row */}
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <TestimonialCard
                  key={`desktop-row1-${index}`}
                  name={testimonial.name}
                  testimonial={testimonial.testimonial}
                  rating={testimonial.rating}
                />
              ))}
            </div>
            
            <div className="grid grid-cols-4 gap-6 mt-6">
              {/* Second row */}
              {testimonials.slice(4, 8).map((testimonial, index) => (
                <TestimonialCard
                  key={`desktop-row2-${index}`}
                  name={testimonial.name}
                  testimonial={testimonial.testimonial}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};