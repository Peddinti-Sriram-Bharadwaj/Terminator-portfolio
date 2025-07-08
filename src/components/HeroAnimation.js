// src/components/HeroAnimation.js
"use client";

import { motion } from "framer-motion";

export default function HeroAnimation() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
        className="opacity-15"
      >
        {/* 1. On-Device Model (The Chip) */}
        <motion.g
          initial={{ scale: 0.95, opacity: 0.8 }}
          animate={{ scale: [0.95, 1, 0.95], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M 200 80 L 220 90 L 220 110 L 200 120 L 180 110 L 180 90 Z"
            fill="none"
            stroke="#0ea5e9" // A muted blue/cyan color
            strokeWidth="1"
          />
        </motion.g>

        {/* 2. AI Safety (The Guardians) */}
        <motion.path
          d="M 150 100 A 50 50 0 0 1 250 100"
          stroke="#34d399" // A muted green color
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
         <motion.path
          d="M 150 100 A 50 50 0 0 0 250 100"
          stroke="#34d399"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* 3. Reinforcement Learning (The Agent) - CORRECTED */}
        <circle
          cx="0"
          cy="0"
          r="2"
          fill="#f59e0b"
        >
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M 50 150 C 100 50, 300 50, 350 150"
            rotate="auto"
          />
        </circle>
        
        {/* Reward flash for the RL agent */}
         <motion.circle
            cx="350"
            cy="150"
            r="3"
            fill="#f59e0b"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 7, // Matches the RL agent's loop
              ease: "easeOut",
            }}
          />
      </svg>
    </div>
  );
}