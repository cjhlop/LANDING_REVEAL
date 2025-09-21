import React, { useEffect, useRef } from 'react';

interface AnimatedTitleProps {
  text: string | string[];
  className?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className = '' }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const lines = Array.isArray(text) ? text : [text];
    const titleElement = titleRef.current;
    
    // Clear existing content
    titleElement.innerHTML = '';

    let charIndex = 0;
    
    lines.forEach((line, lineIndex) => {
      const words = line.split(' ');
      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        
        // Apply gradient to specific words
        if (word === 'Buyer' || word === 'Signal.' || word === 'B2B' || word === 'Sale.') {
          wordSpan.style.background = 'linear-gradient(to right, #2563eb, #60a5fa)';
          wordSpan.style.webkitBackgroundClip = 'text';
          wordSpan.style.backgroundClip = 'text';
          wordSpan.style.webkitTextFillColor = 'transparent';
        }
        
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

      if (lineIndex < lines.length - 1) {
        titleElement.appendChild(document.createElement('br'));
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