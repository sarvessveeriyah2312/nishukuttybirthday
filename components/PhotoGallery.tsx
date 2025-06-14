'use client';

import React, { useState } from 'react';
import { X, Heart } from 'lucide-react';
import { galleryPhotos } from '../data/photos';
import Image from 'next/image';

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedPhoto(index);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="max-w-6xl mx-auto mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 font-dancing">
          Beautiful Memories
        </h2>
        <p className="text-gray-700 text-lg">Every picture tells a story behind 💕</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {galleryPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => openModal(index)}
          >
            <Image
              src={photo.url}
              alt={photo.alt}
              width={400}
              height={300}
              className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">{photo.caption}</p>
              </div>
              <div className="absolute top-4 right-4">
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors duration-200 z-10"
              aria-label="Close photo"
            >
              <X className="w-8 h-8" />
            </button>
            <Image
              src={galleryPhotos[selectedPhoto].url}
              alt={galleryPhotos[selectedPhoto].alt}
              width={800}
              height={600}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-center font-medium">
                {galleryPhotos[selectedPhoto].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;