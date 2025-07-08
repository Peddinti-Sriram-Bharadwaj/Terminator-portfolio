// src/components/ProjectCard.js
"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaFileAlt } from 'react-icons/fa';
import { TbScan } from 'react-icons/tb'; // The new scan icon

export default function ProjectCard({ project, onScan }) {
  const [isHovered, setIsHovered] = useState(false);

  // The audio hook and related logic have been removed.
  const handleMouseEnter = () => setIsHovered(true);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
  const isGithubLink = project.githubUrl.includes("github.com");
  const linkText = isGithubLink ? "Source Code" : "Read Paper";
  const linkIcon = isGithubLink ? <FaGithub /> : <FaFileAlt />;
  
  const accentColor = "text-amber-400";
  const hoverAccentColor = "hover:underline hover:text-amber-300";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="relative border border-gray-700 rounded-lg p-4 my-4 bg-gray-800 shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bounding Box Overlay */}
      {isHovered && (
        <div className="absolute inset-0 border-2 border-red-500 rounded-lg pointer-events-none">
          <div className="absolute top-0 left-0 bg-red-500 text-black text-xs font-mono px-1">
            TARGET_ID: {project.title.split(' ')[0]}
          </div>
        </div>
      )}

      {/* Original Card Content */}
      <h3 className="font-bold text-xl mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span key={tech} className="bg-gray-700 text-slate-300 text-sm font-medium px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-4">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${accentColor} ${hoverAccentColor}`}>
            Live Demo
          </a>
        )}
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 ${accentColor} ${hoverAccentColor}`}>
          {linkIcon}
          {linkText}
        </a>

        
      </div>
    </motion.div>
  );
}