// src/components/AnimatedSection.js
"use client"; // This is a client component

import { motion } from "framer-motion";

export default function AnimatedSection({ children }) {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      variants={sectionVariants}
      className="mb-20" // Re-add the margin here
    >
      {children}
    </motion.section>
  );
}