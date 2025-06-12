import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasStartedRef = useRef(false); // To ensure autoplay runs only once

  const audioUrl = "/happy-birthday-155461.mp3";

  useEffect(() => {
    const tryAutoplay = () => {
      if (audioRef.current && !hasStartedRef.current) {
        audioRef.current.volume = volume;
        audioRef.current.loop = true;

        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            hasStartedRef.current = true;
          })
          .catch((err) => {
            console.log("Autoplay blocked or failed:", err);
          });
      }
    };

    // Attach event to allow autoplay after user interaction
    window.addEventListener('mousedown', tryAutoplay, { once: true });
    window.addEventListener('touchstart', tryAutoplay, { once: true });
    window.addEventListener('keydown', tryAutoplay, { once: true });

    return () => {
      window.removeEventListener('mousedown', tryAutoplay);
      window.removeEventListener('touchstart', tryAutoplay);
      window.removeEventListener('keydown', tryAutoplay);
    };
  }, [volume]);

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.log('Audio playback failed:', error);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/30">
        <div className="flex items-center space-x-3">
          <button
            onClick={togglePlay}
            className="bg-pink-500 hover:bg-pink-600 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>

          <button
            onClick={toggleMute}
            className="text-pink-600 hover:text-pink-700 transition-colors duration-200"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        <div className="mt-2 text-xs text-pink-700 text-center">
          Our Song 💕
        </div>
      </div>

      <audio
        ref={audioRef}
        src={audioUrl}
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default MusicPlayer;
