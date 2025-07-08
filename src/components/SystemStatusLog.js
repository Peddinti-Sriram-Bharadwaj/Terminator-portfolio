// src/components/SystemStatusLog.js
"use client";
import { useState, useEffect } from 'react';

const statusMessages = [
  "STATUS: ACQUIRING TARGETS...",
  "CPU_TEMP: 39.1C",
  "ROUTING: IDLE",
  "OBJECT_DETECTED: Human (Non-Hostile)",
  "ANALYZING...",
];

export default function SystemStatusLog() {
  const [message, setMessage] = useState(statusMessages[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % statusMessages.length;
      setMessage(statusMessages[index]);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-20 font-mono text-xs text-red-500 bg-black bg-opacity-50 p-2 rounded">
      <p>{message}</p>
    </div>
  );
}