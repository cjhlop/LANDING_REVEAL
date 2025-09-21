import React, { useEffect, useRef } from 'react';

interface AnimatedTitleProps {
  text: string | string[];
  className?: string;
  gradientWords?: string[]; // Words that should have gradient styling
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ 
  text, 
  className = '',
  gradientWords = []
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const lines = Array.isArray(text) ? text : [text];
    const titleElement = titleRef.current;
    
    // Clear existing content
    titleElement.innerHTML = '';

    let wordIndex = 0;
    
    lines.forEach((line, lineIndex) => {
      const words = line.split(' ');
      words.forEach((word, wordIndexInLine) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        wordSpan.textContent = word;
        
        // Check if this word should have gradient styling
        const shouldHaveGradient = gradientWords.some(gradientWord => 
          word.toLowerCase().replace(/[.,!?]/g, '') === gradientWord.toLowerCase()
        );
        
        if (shouldHaveGradient) {
          wordSpan.classList.add('gradient-word');
        }
        
        // Set animation delay based on word index
        wordSpan.style.setProperty('--word-index', wordIndex.toString());
        wordSpan.style.animationDelay = `${wordIndex * 0.15}s`;
        
        titleElement.appendChild(wordSpan);
        wordIndex++;
        
        // Add space between words (except for the last word in the line)
        if (wordIndexInLine < words.length - 1) {
          const spaceSpan = document.createElement('span');
          spaceSpan.innerHTML = '&nbsp;';
          titleElement.appendChild(spaceSpan);
        }
      });

      if (lineIndex < lines.length - 1) {
        titleElement.appendChild(document.createElement('br'));
      }
    });
  }, [text, gradientWords]);

  return (
    <h1 
      ref={titleRef}
      className={`hero-title ${className}`}
      role="heading"
      aria-level={1}
    />
  );
};