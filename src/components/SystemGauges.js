// src/components/SystemGauges.js
"use client";
import { useState, useEffect } from 'react';

// Function to generate a random number within a range
const randomBetween = (min, max) => Math.random() * (max - min) + min;

export default function SystemGauges() {
  // Initialize state with static, non-random values to prevent hydration error
  const [cpuLoad, setCpuLoad] = useState(5.0);
  const [coreTemp, setCoreTemp] = useState(40.0);

  useEffect(() => {
    // Set the first random value only on the client after mounting
    setCpuLoad(randomBetween(2, 5));
    setCoreTemp(randomBetween(38, 42));

    const interval = setInterval(() => {
      // CPU load fluctuates more rapidly
      setCpuLoad(prev => {
        const change = randomBetween(-0.5, 0.5);
        const newLoad = Math.max(2, Math.min(15, prev + change)); // Keep it within 2% and 15%
        return newLoad;
      });

      // Core temp changes more slowly
      setCoreTemp(prev => {
        const change = randomBetween(-0.1, 0.1);
        const newTemp = Math.max(38, Math.min(45, prev + change)); // Keep it within 38C and 45C
        return newTemp;
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []); // The empty dependency array ensures this runs only once on mount

  return (
    <div className="text-xs font-mono mt-4">
      <p>CPU LOAD: {cpuLoad.toFixed(1)}%</p>
      <p className="mt-1">CORE TEMP: {coreTemp.toFixed(1)}C</p>
    </div>
  );
}