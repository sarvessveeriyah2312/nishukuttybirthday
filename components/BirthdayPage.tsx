import React from 'react';
import { Heart, Gift, Sparkles } from 'lucide-react';
import HeartAnimation from './HeartAnimation';
import MessageCycler from './MessageCycler';
import PhotoGallery from './PhotoGallery';
import MusicPlayer from './MusicPlayer';

interface BirthdayPageProps {
  girlfriendName?: string;
}

const BirthdayPage: React.FC<BirthdayPageProps> = ({ girlfriendName = "Beautiful" }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 relative overflow-hidden">
      <HeartAnimation />
      <MusicPlayer />

      <div className="relative z-20 px-4 py-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="mb-8 flex justify-center items-center space-x-4">
            <Sparkles className="text-pink-500 w-8 h-8 animate-spin-slow" />
            <Heart className="text-pink-500 w-12 h-12 fill-current animate-heartbeat" />
            <Gift className="text-purple-500 w-8 h-8 animate-bounce" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent mb-8 font-dancing leading-tight">
            Happy Birthday!
          </h1>

          <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/30 mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 font-dancing">
              Happy Birthday, {girlfriendName}!
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              You are my sunshine and the light of my life. ✨
            </p>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              Today we celebrate the most amazing person I know! 💖
            </p>
          </div>

          {/* Main Photo */}
          <div className="mb-16">
            <div className="relative group max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img
                src="/image3.jpeg"
                alt="Beautiful moment"
                className="relative w-full h-80 md:h-96 object-cover rounded-full shadow-2xl border-4 border-white/50"
              />
              <div className="absolute -bottom-4 -right-4 bg-pink-500 text-white rounded-full p-4 shadow-lg animate-bounce">
                <Heart className="w-6 h-6 fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* Message Cycler */}
        <MessageCycler />

        {/* Photo Gallery */}
        <PhotoGallery />

        {/* Footer */}
        <div className="text-center max-w-2xl mx-auto mt-16">
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30">
            <p className="text-lg md:text-xl text-gray-700 mb-4 font-medium">
              Here's to another year of adventures, laughter, and endless love! 🥂
            </p>
            <div className="flex justify-center space-x-2 text-2xl">
              💕 🎉 🎂 🌟 💖 🎈 ✨ 🥳
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayPage;
