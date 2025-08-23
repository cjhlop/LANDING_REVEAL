import React, { useEffect, useRef } from 'react';

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className = '' }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    // Split text into words and characters
    const words = text.split(' ');
    const titleElement = titleRef.current;
    
    // Clear existing content
    titleElement.innerHTML = '';

    let charIndex = 0;
    
    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word';
      
      // Split word into characters
      word.split('').forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.className = 'char';
        charSpan.textContent = char;
        charSpan.style.setProperty('--char-index', charIndex.toString());
        charSpan.style.animationDelay = `${charIndex * 0.02}s`;
        wordSpan.appendChild(charSpan);
        charIndex++;
      });
      
      titleElement.appendChild(wordSpan);
      
      // Add space between words (except for the last word)
      if (wordIndex < words.length - 1) {
        const spaceSpan = document.createElement('span');
        spaceSpan.className = 'char';
        spaceSpan.innerHTML = '&nbsp;';
        spaceSpan.style.setProperty('--char-index', charIndex.toString());
        spaceSpan.style.animationDelay = `${charIndex * 0.02}s`;
        titleElement.appendChild(spaceSpan);
        charIndex++;
      }
    });
  }, [text]);

  return (
    <h1 
      ref={titleRef}
      className={`hero-title ${className}`}
      role="heading"
      aria-level={1}
    />
  );
};