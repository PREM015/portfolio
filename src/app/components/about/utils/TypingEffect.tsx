'use client';
import { useState, useEffect } from 'react';

interface TypingEffectProps {
  words: string[];
}

export default function TypingEffect({ words }: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-green-300">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
