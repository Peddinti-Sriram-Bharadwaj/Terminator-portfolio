// src/components/ScanModal.js
"use client";
import { motion } from 'framer-motion';
import { CgClose } from 'react-icons/cg'; // Close icon

export default function ScanModal({ project, onClose }) {
  if (!project) return null;

  // Create some fake tactical data for effect
  const tacticalData = {
    classification: project.stack.includes("Reinforcement Learning") ? "AUTONOMOUS AGENT" : "STATIC DATA PLATFORM",
    threatLevel: "None",
    resourceCost: `${project.stack.length * 17}%`,
    subModules: project.stack.join(', '),
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-75"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        className="relative w-full max-w-2xl bg-slate-900 border border-red-500/50 p-6 font-mono text-red-500"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl hover:text-white">
          <CgClose />
        </button>

        <h2 className="text-xl mb-4">// DETAILED SCAN: {project.title}</h2>
        <div className="border-t border-red-500/50 pt-4 space-y-2 text-sm">
          <p><span className="text-white">TARGET_ID:</span> {project.title.split(' ')[0]}</p>
          <p><span className="text-white">CLASSIFICATION:</span> {tacticalData.classification}</p>
          <p><span className="text-white">THREAT_LEVEL:</span> {tacticalData.threatLevel}</p>
          <p><span className="text-white">EST_RESOURCE_COST:</span> {tacticalData.resourceCost}</p>
          <p><span className="text-white">SUB_MODULES:</span> {tacticalData.subModules}</p>
        </div>
      </motion.div>
    </div>
  );
}