// src/components/Navbar.js
"use client"; // Add this line

import TerminatorEye from './TerminatorEye';

export default function Navbar({ name, onNavLinkClick }) {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    onNavLinkClick(targetId);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-10 bg-gray-950 bg-opacity-30 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-bold text-lg">{name}</div>
          <TerminatorEye />
        </div>
        <div className="flex items-center gap-6 text-gray-300">
          <a href="#projects" onClick={(e) => handleClick(e, 'projects')} className="hover:text-white">Projects</a>
          <a href="#reading" onClick={(e) => handleClick(e, 'reading')} className="hover:text-white">Reading</a>
          <a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}