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
      
      // Check if this line contains gradient phrases
      const hasBuyerSignal = line.includes('Buyer Signal.');
      const hasB2BSale = line.includes('B2B Sale.');
      
      if (hasBuyerSignal) {
        // Handle "Sense Every Buyer Signal." line
        const parts = line.split('Buyer Signal.');
        
        // "Sense Every " part
        if (parts[0]) {
          const normalWords = parts[0].trim().split(' ');
          normalWords.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'word';
            
            word.split('').forEach((char) => {
              const charSpan = document.createElement('span');
              charSpan.className = 'char';
              charSpan.textContent = char;
              charSpan.style.animationDelay = `${charIndex * 0.02}s`;
              wordSpan.appendChild(charSpan);
              charIndex++;
            });
            
            titleElement.appendChild(wordSpan);
            
            // Add space
            if (wordIndex < normalWords.length - 1) {
              const spaceSpan = document.createElement('span');
              spaceSpan.className = 'char';
              spaceSpan.innerHTML = '&nbsp;';
              spaceSpan.style.animationDelay = `${charIndex * 0.02}s`;
              titleElement.appendChild(spaceSpan);
              charIndex++;
            }
          });
          
          // Add space before gradient phrase
          const spaceSpan = document.createElement('span');
          spaceSpan.className = 'char';
          spaceSpan.innerHTML = '&nbsp;';
          spaceSpan.style.animationDelay = `${charIndex * 0.02}s`;
          titleElement.appendChild(spaceSpan);
          charIndex++;
        }
        
        // "Buyer Signal." as gradient phrase
        const gradientPhrase = document.createElement('span');
        gradientPhrase.className = 'word gradient-word';
        
        'Buyer Signal.'.split('').forEach((char) => {
          const charSpan = document.createElement('span');
          charSpan.className = 'char';
          charSpan.textContent = char;
          charSpan.style.animationDelay = `${charIndex * 0.02}s`;
          gradientPhrase.appendChild(charSpan);
          charIndex++;
        });
        
        titleElement.appendChild(gradientPhrase);
        
      } else if (hasB2BSale) {
        // Handle "Drive Every B2B Sale." line
        const parts = line.split('B2B Sale.');
        
        // "Drive Every " part
        if (parts[0]) {
          const normalWords = parts[0].trim().split(' ');
          normalWords.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'word';
            
            word.split('').forEach((char) => {
              const charSpan = document.createElement('span');
              charSpan.className = 'char';
              charSpan.textContent = char;
              charSpan.style.animationDelay = `${charIndex * 0.02}s`;
              wordSpan.appendChild(charSpan);
              charIndex++;
            });
            
            titleElement.appendChild(wordSpan);
            
            // Add space
            if (wordIndex < normalWords.length - 1) {
              const spaceSpan = document.createElement('span');
              spaceSpan.className = 'char';
              spaceSpan.innerHTML = '&nbsp;';
              spaceSpan.style.animationDelay = `${charIndex * 0.02}s`;
              titleElement.appendChild(spaceSpan);
              charIndex++;
            }
          });
          
          // Add space before gradient phrase
          const spaceSpan = document.createElement('span');
          spaceSpan.className = 'char';
          spaceSpan.innerHTML = '&nbsp;';
          spaceSpan.style.animationDelay = `${charIndex * 0.02}s`;
          titleElement.appendChild(spaceSpan);
          charIndex++;
        }
        
        // "B2B Sale." as gradient phrase
        const gradientPhrase = document.createElement('span');
        gradientPhrase.className = 'word gradient-word';
        
        'B2B Sale.'.split('').forEach((char) => {
          const charSpan = document.createElement('span');
          charSpan.className = 'char';
          charSpan.textContent = char;
          charSpan.style.animationDelay = `${charIndex * 0.02}s`;
          gradientPhrase.appendChild(charSpan);
          charIndex++;
        });
        
        titleElement.appendChild(gradientPhrase);
        
      } else {
        // Handle normal lines without gradient phrases
        words.forEach((word, wordIndex) => {
          const wordSpan = document.createElement('span');
          wordSpan.className = 'word';
          
          word.split('').forEach((char) => {
            const charSpan = document.createElement('span');
            charSpan.className = 'char';
            charSpan.textContent = char;
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
            spaceSpan.style.animationDelay = `${charIndex * 0.02}s`;
            titleElement.appendChild(spaceSpan);
            charIndex++;
          }
        });
      }

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