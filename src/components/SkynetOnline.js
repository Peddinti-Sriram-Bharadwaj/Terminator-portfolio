// src/components/SkynetOnline.js
"use client";

import { motion } from 'framer-motion';

const mainText = "SKYNET GLOBAL DEFENSE NETWORK";
const statusText = "STATUS: FULLY ONLINE";

export default function SkynetOnline() {
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.04,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ backgroundColor: '#ff0000' }}
      animate={{ backgroundColor: '#000000' }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center font-mono text-red-500"
    >
      <motion.h1
        variants={sentence}
        initial="hidden"
        animate="visible"
        className="text-2xl md:text-4xl lg:text-5xl text-center"
      >
        {mainText.split("").map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-4 text-xl md:text-2xl animate-pulse"
      >
        {statusText}
      </motion.p>
    </motion.div>
  );
}