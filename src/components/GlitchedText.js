// src/components/GlitchedText.js
"use client";

import { useEffect } from 'react';
import { useGlitchedText } from '../hooks/useGlitchedText';

export default function GlitchedText({ originalText, className }) {
  const { text, startGlitch, stopGlitch, setText } = useGlitchedText();

  useEffect(() => {
    const initialText = originalText.split("").map(char => ({ char, color: '#f8fafc' }));
    setText(initialText);
  }, [originalText, setText]);

  return (
    <h1 
      onMouseEnter={() => startGlitch(originalText)} 
      onMouseLeave={() => stopGlitch(originalText)}
      className={className}
    >
      {text.map((item, index) => (
        <span key={index} style={{ color: item.color }}>
          {item.char}
        </span>
      ))}
    </h1>
  );
}