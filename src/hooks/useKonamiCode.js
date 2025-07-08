// src/hooks/useKonamiCode.js
"use client";

import { useEffect, useState } from 'react';

const konamiCode = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export const useKonamiCode = (callback) => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const handler = (event) => {
      const newKeys = [...keys, event.key];
      
      // Keep the array at the same length as the konami code
      if (newKeys.length > konamiCode.length) {
        newKeys.shift();
      }

      if (JSON.stringify(newKeys) === JSON.stringify(konamiCode)) {
        callback();
      }
      
      setKeys(newKeys);
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [keys, callback]); // Rerun effect if keys or callback change
};