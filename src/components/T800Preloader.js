// src/components/T800Preloader.js
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './T800Preloader.css';

const bootSequenceLines = [
  "SKT_SYS-V1.02 CORE OS",
  "INITIATING DIAGNOSTICS...",
  "CPU: NEURAL NET PROCESSOR - ONLINE",
  "MEMORY: 640Kb - OK",
  "I/O: HYPERALLOY COMBAT CHASSIS - CALIBRATING",
  "SENSORS: 2x VISUAL (RED) - ACTIVE",
  "ACQUIRING TACTICAL DATA...",
  "SYSTEMS ONLINE",
];

const generateGarbageData = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length)) + ' ';
  }
  return result;
};

export default function T800Preloader({ onComplete }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      generateGarbageData(200),
      generateGarbageData(200),
      generateGarbageData(200),
      generateGarbageData(200),
    ]);
  }, []);

  const containerVariants = { /* ... */ };
  const lineVariants = { /* ... */ };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black font-mono text-red-500 overflow-hidden"
    >
      {/* Overlays and Data Columns */}
      <div className="scanline-overlay z-10"></div>
      <div className="data-column left-4" style={{ animationDuration: '8s' }}>{data[0]}</div>
      <div className="data-column left-[25%]" style={{ animationDuration: '10s' }}>{data[1]}</div>
      <div className="data-column right-[25%]" style={{ animationDuration: '7s', animationDirection: 'reverse' }}>{data[2]}</div>
      <div className="data-column right-4" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>{data[3]}</div>
      <div className="absolute top-4 left-4 text-xs">// PWR: ONLINE</div>
      <div className="absolute bottom-4 right-4 text-xs">// SYS: COMBAT READY</div>
      
      {/* Central Boot Sequence */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={onComplete}
        className="z-20 p-4 text-center"
      >
        {bootSequenceLines.map((line, index) => (
          <motion.p key={index} variants={lineVariants} className="text-sm md:text-base">
            {line}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}