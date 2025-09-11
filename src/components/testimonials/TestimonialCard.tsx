import * as React from "react";
import { cn } from "@/lib/utils";
import RandomIcon from "@/components/navbar/RandomIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type Testimonial = {
  company: string;
  quote: string;
  author: {
    name: string;
    role: string;
    avatarSrc?: string;
  };
};

export type TestimonialCardProps = {
  item: Testimonial;
  className?: string;
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item, className }) => {
  return (
    <figure
      className={cn(
        "t-card rounded-2xl bg-[#f5f9ff] ring-1 ring-[#f5f9ff] h-[420px] w-[330px] p-8 flex flex-col justify-between",
        className,
      )}
      role="group"
      aria-label={`Testimonial from ${item.author.name} at ${item.company}`}
    >
      {/* Brand */}
      <figcaption className="flex items-center gap-2 text-left" aria-label={`${item.company} brand`}>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 ring-1 ring-gray-200">
          <RandomIcon className="size-4 text-gray-700" title={`${item.company} icon`} />
        </span>
        <span className="text-[16px] leading-6 font-medium text-gray-900 tracking-tight">
          {item.company}
        </span>
      </figcaption>

      {/* Quote */}
      <blockquote className="text-[16px] leading-[150%] tracking-[-0.3px] text-[#5E5E5E] mt-4 line-clamp-[12]">
        {item.quote}
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 mt-6">
        <Avatar className="h-8 w-8 ring-1 ring-gray-200">
          {item.author.avatarSrc ? (
            <AvatarImage src={item.author.avatarSrc} alt={`${item.author.name} avatar`} />
          ) : null}
          <AvatarFallback className="text-xs bg-gray-100">{initials(item.author.name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-[14px] leading-[150%] font-semibold text-black tracking-[-0.2px]">
            {item.author.name}
          </span>
          <span className="text-[12px] leading-[150%] text-[#7C7C7C] tracking-[-0.2px]">
            {item.author.role}
          </span>
        </div>
      </div>
    </figure>
  );
};

export default React.memo(TestimonialCard);