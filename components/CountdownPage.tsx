'use client';

import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { calculateTimeLeft, formatNumber } from '../utils/dateUtils';
import { CountdownTime } from '../types';
import HeartAnimation from './HeartAnimation';

interface CountdownPageProps {
  targetDate: Date;
  onCountdownEnd: () => void;
}

const CountdownPage: React.FC<CountdownPageProps> = ({ targetDate, onCountdownEnd }) => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && 
          newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        onCountdownEnd();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onCountdownEnd]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 flex items-center justify-center px-4 relative overflow-hidden">
      <HeartAnimation />
      
      <div className="text-center max-w-4xl mx-auto relative z-20">
        <div className="mb-8 animate-pulse">
          <Heart className="mx-auto text-pink-500 w-16 h-16 md:w-20 md:h-20 mb-6 fill-current animate-heartbeat" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent mb-8 font-dancing leading-tight">
          Counting down to a special day...
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto mb-8">
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-white/20">
            <div className="text-3xl md:text-5xl font-bold text-pink-600 font-mono">
              {formatNumber(timeLeft.days)}
            </div>
            <div className="text-sm md:text-base text-pink-700 font-medium mt-2">
              Days
            </div>
          </div>

          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-white/20">
            <div className="text-3xl md:text-5xl font-bold text-purple-600 font-mono">
              {formatNumber(timeLeft.hours)}
            </div>
            <div className="text-sm md:text-base text-purple-700 font-medium mt-2">
              Hours
            </div>
          </div>

          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-white/20">
            <div className="text-3xl md:text-5xl font-bold text-rose-600 font-mono">
              {formatNumber(timeLeft.minutes)}
            </div>
            <div className="text-sm md:text-base text-rose-700 font-medium mt-2">
              Minutes
            </div>
          </div>

          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-white/20">
            <div className="text-3xl md:text-5xl font-bold text-pink-600 font-mono animate-pulse">
              {formatNumber(timeLeft.seconds)}
            </div>
            <div className="text-sm md:text-base text-pink-700 font-medium mt-2">
              Seconds
            </div>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
          Something beautiful is coming... 💕
        </p>
      </div>
    </div>
  );
};

export default CountdownPage;