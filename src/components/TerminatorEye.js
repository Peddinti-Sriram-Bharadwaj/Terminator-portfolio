// src/components/TerminatorEye.js

export default function TerminatorEye() {
    // The binary code for "AI"
    const binaryCode = "01000001 01001001"; 
  
    return (
      // The "group" class allows us to show the tooltip when hovering over this container
      <div className="relative flex items-center justify-center ml-2 group">
        {/* The red dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
  
        {/* The Tooltip (hidden by default) */}
        <div 
          className="absolute bottom-full mb-2 px-2 py-1 bg-black text-white text-xs rounded-md 
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                     transition-opacity duration-300"
        >
          {binaryCode}
          {/* Tooltip arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 
                        border-x-4 border-x-transparent border-t-4 border-t-black">
          </div>
        </div>
      </div>
    );
  }