"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import RandomIcon from "@/components/navbar/RandomIcon";

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

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item, className }) => {
  const { company, quote, author } = item;

  return (
    <article
      className={cn("testimonial-card", className)}
      role="article"
      aria-label={`Testimonial from ${author.name} at ${company}`}
    >
      {/* Brand mark */}
      <div className="testimonial-brand" role="img" aria-label={`${company} brand mark`}>
        <span className="testimonial-brand-icon" aria-hidden="true">
          <RandomIcon className="size-5 text-violet-600" />
        </span>
        <span className="testimonial-brand-name">{company}</span>
      </div>

      {/* Quote */}
      <blockquote className="testimonial-quote" aria-label="Testimonial quote">
        <p>“{quote}”</p>
      </blockquote>

      {/* Author */}
      <footer className="testimonial-author" aria-label="Author">
        <div className="testimonial-author-avatar" aria-hidden="true">
          <img
            src={author.avatarSrc || "/placeholder.svg"}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="testimonial-author-meta">
          <div className="testimonial-author-name">{author.name}</div>
          <div className="testimonial-author-role">{author.role}</div>
        </div>
      </footer>
    </article>
  );
};

export default React.memo(TestimonialCard);