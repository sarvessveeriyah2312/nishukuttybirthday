'use client';

import React from 'react';

const HeartAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className={`absolute animate-float-heart opacity-70`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          <div className="text-pink-400 text-2xl md:text-3xl transform hover:scale-110 transition-transform">
            💖
          </div>
        </div>
      ))}
      
      {[...Array(8)].map((_, index) => (
        <div
          key={`small-${index}`}
          className="absolute animate-float-heart-slow opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        >
          <div className="text-rose-300 text-lg md:text-xl">
            💕
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeartAnimation;