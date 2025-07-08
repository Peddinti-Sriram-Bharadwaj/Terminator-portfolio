// src/components/TargetingOverlay.js
"use client";
import { motion } from 'framer-motion';

export default function TargetingOverlay({ target }) {
  if (!target) return null;

  const sentence = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const letter = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const textToAnimate = `TARGET ACQUIRED: "${target}"`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <motion.div
        key={target}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
        transition={{ duration: 1.5, times: [0, 0.1, 0.9, 1] }}
        className="text-2xl font-mono text-red-500 bg-black bg-opacity-70 px-8 py-4 border border-red-500/50 flex items-center gap-4"
      >
        {/* Animating Brackets */}
        <motion.span
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          [
        </motion.span>
        
        {/* Animating Text */}
        <motion.p variants={sentence} initial="hidden" animate="visible">
          {textToAnimate.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.p>

        {/* Animating Brackets */}
        <motion.span
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          ]
        </motion.span>
      </motion.div>
    </div>
  );
}