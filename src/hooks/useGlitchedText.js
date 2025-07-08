// src/hooks/useGlitchedText.js
"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#';
const colors = ['#ef4444', '#dc2626', '#b91c1c', '#f8fafc', '#e2e8f0'];

export const useGlitchedText = () => {
  const [text, setText] = useState([]);
  const intervalRef = useRef(null);

  const startGlitch = useCallback((originalText) => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const glitched = originalText
        .split("")
        .map((char, index) => {
          if (char === ' ') return { char: ' ', color: '' };
          if (index < iteration) {
            return { char: originalText[index], color: '#f8fafc' }; // Final color
          }
          return {
            char: chars[Math.floor(Math.random() * chars.length)],
            color: colors[Math.floor(Math.random() * colors.length)],
          };
        });
      
      setText(glitched);
      
      if (iteration >= originalText.length) {
        clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 3;
    }, 30);
  }, []);

  const stopGlitch = useCallback((originalText) => {
    clearInterval(intervalRef.current);
    const resolved = originalText.split("").map(char => ({ char, color: '#f8fafc' }));
    setText(resolved);
  }, []);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return { text, startGlitch, stopGlitch, setText };
};