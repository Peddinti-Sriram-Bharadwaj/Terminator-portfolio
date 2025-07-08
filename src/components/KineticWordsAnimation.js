// src/components/KineticWordsAnimation.js
"use client";

import { useState, useEffect } from "react"; // Import hooks
import { motion } from "framer-motion";

// --- (The word lists and generateWordProps function remain the same) ---
const safetyWords = ["Bias Detection", "Fairness", "Privacy", "Robustness", "Guardrails"];
const rlWords = ["Q-Learning", "Policy Gradient", "Reward", "Exploration", "Agent"];
const onDeviceWords = ["Quantization", "Edge AI", "Latency", "Pruning", "Local LLM"];
const allWords = [...safetyWords, ...rlWords, ...onDeviceWords];

const generateWordProps = (index) => {
  const top = Math.random() * 80 + 10;
  const left = Math.random() * 80 + 10;
  const delay = Math.random() * 5;
  const duration = Math.random() * 5 + 5;
  return {
    style: {
      top: `${top}%`,
      left: `${left}%`,
      position: 'absolute',
    },
    animate: {
      opacity: [0, 0.7, 0],
      y: [0, -10, 10, 0],
    },
    transition: {
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };
};


export default function KineticWordsAnimation() {
  // Add a state to track if the component has mounted on the client
  const [isMounted, setIsMounted] = useState(false);

  // Use useEffect to set isMounted to true only on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return null if the component is not yet mounted on the client
  if (!isMounted) {
    return null;
  }

  // Once mounted, render the animation
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="relative w-full h-full">
        {allWords.map((word, index) => (
          <motion.span
            key={index}
            className="text-gray-400 text-base md:text-lg font-mono"
            {...generateWordProps(index)}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}