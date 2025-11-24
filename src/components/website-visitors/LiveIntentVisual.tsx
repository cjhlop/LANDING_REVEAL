import React, { useState } from "react";

const LiveIntentVisual = () => {
  // Use state to keep random values stable after hydration
  const [bars] = useState(() => 
    Array.from({ length: 8 }).map((_, i) => ({
      key: i,
      duration: 1.5 + Math.random(), // Random duration between 1.5s and 2.5s
      delay: i * 0.15,
      scanDuration: 2 + Math.random()
    }))
  );

  return (
    <div className="absolute right-0 bottom-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Gradient Masks */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent z-10" />
      
      {/* Animated Bars Container */}
      <div className="absolute bottom-0 right-0 flex items-end gap-2 p-8 opacity-60 transform translate-y-4 translate-x-4">
        {bars.map((bar) => (
          <div 
            key={bar.key}
            className="w-8 md:w-12 bg-gradient-to-t from-green-900/20 to-green-500 rounded-t-sm relative overflow-hidden"
            style={{
              height: '120px',
              transformOrigin: 'bottom',
              animation: `equalizer ${bar.duration}s ease-in-out infinite alternate`,
              animationDelay: `${bar.delay}s`
            }}
          >
            {/* Top Glow Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)]" />
            
            {/* Inner Scan Line */}
            <div 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent"
              style={{
                animation: `scan ${bar.scanDuration}s linear infinite`,
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes equalizer {
          0% { transform: scaleY(0.3); opacity: 0.3; }
          50% { transform: scaleY(1); opacity: 1; }
          100% { transform: scaleY(0.6); opacity: 0.6; }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
};

export default LiveIntentVisual;