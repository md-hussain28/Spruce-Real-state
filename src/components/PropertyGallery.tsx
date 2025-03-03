import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images, title }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`}>
      {/* Main Image */}
      <div className={`relative overflow-hidden ${isFullscreen ? 'h-full flex items-center justify-center' : 'rounded-lg h-[500px]'}`}>
        <img
          src={images[currentImage]}
          alt={`${title} - Image ${currentImage + 1}`}
          className={`w-full h-full object-cover ${isFullscreen ? 'object-contain' : ''}`}
        />
        
        {/* Navigation Controls */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          <Maximize size={20} />
        </button>
        
        {/* Image Counter */}
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImage + 1} / {images.length}
        </div>
      </div>
      
      {/* Thumbnail Navigation */}
      {!isFullscreen && (
        <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex-shrink-0 w-24 h-16 rounded-md overflow-hidden border-2 transition-all ${
                index === currentImage ? 'border-gold' : 'border-transparent hover:border-gold/50'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
      
      {/* Fullscreen Close Button */}
      {isFullscreen && (
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 bg-white text-black p-2 rounded-full"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default PropertyGallery;