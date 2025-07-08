// src/components/ConsoleEasterEgg.js
"use client";

import { useEffect } from 'react';

export default function ConsoleEasterEgg() {
  useEffect(() => {
    const message = `
// T-800 Systems Log
// Model: Cyberdyne Systems 101
// Status: Active
    `;
    
    const styles = [
      'color: #ff0000', // Red color
      'font-family: monospace',
      'font-weight: bold',
    ].join(';');

    console.log(message);
    console.log('%cI\'ll be back.', styles);
  }, []);

  return null; // This component renders nothing to the page
}