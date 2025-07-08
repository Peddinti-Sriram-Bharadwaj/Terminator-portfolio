// src/components/FuelCell.js
"use client";
import { useState, useEffect } from 'react';

export default function FuelCell() {
  const [power, setPower] = useState(99.9);

  useEffect(() => {
    const interval = setInterval(() => {
      setPower(prev => {
        const newPower = prev - 0.1;
        return newPower < 85 ? 99.9 : newPower; // Reset if power gets too low
      });
    }, 5000); // Decrease power every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const powerPercentage = power.toFixed(1);
  const barWidth = `${power}%`;

  return (
    <div className="text-xs font-mono mt-4">
      <p>I-CELL POWER: {powerPercentage}%</p>
      <div className="w-full bg-red-900 h-1 mt-1">
        <div className="bg-red-500 h-1" style={{ width: barWidth }}></div>
      </div>
    </div>
  );
}