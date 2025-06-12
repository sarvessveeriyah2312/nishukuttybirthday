'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { birthdayMessages } from '../data/messages';

const MessageCycler: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMessage = () => {
    setCurrentIndex((prev) => (prev + 1) % birthdayMessages.length);
  };

  const prevMessage = () => {
    setCurrentIndex((prev) => (prev - 1 + birthdayMessages.length) % birthdayMessages.length);
  };

  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/30 relative overflow-hidden">
        <div className="absolute top-4 right-4">
          <Heart className="w-6 h-6 text-pink-400 fill-current animate-pulse" />
        </div>

        <div className="text-center mb-8">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed font-medium min-h-[120px] md:min-h-[100px] flex items-center justify-center">
            {birthdayMessages[currentIndex].text}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={prevMessage}
            className="bg-pink-500/20 hover:bg-pink-500/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 group border border-pink-300/30"
            aria-label="Previous message"
          >
            <ChevronLeft className="w-6 h-6 text-pink-600 group-hover:text-pink-700" />
          </button>

          <div className="flex space-x-2">
            {birthdayMessages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-pink-500 scale-125'
                    : 'bg-pink-300/50 hover:bg-pink-400/70'
                }`}
                aria-label={`Go to message ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextMessage}
            className="bg-pink-500/20 hover:bg-pink-500/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 group border border-pink-300/30"
            aria-label="Next message"
          >
            <ChevronRight className="w-6 h-6 text-pink-600 group-hover:text-pink-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageCycler;