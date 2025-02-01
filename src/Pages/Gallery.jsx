// src/components/Gallery.js
import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <div>
        <h3 className="text-4xl font-bold text-center text-red-400 mb-10">
          Our Gallery
        </h3>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-4 sm:mx-6 md:mx-12 lg:mx-20">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            {/* Image Section */}
            <div className="relative h-60">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-lg font-semibold text-white text-center">
                  {/* {image.title} */}
                </h3>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col items-center justify-center bg-white">
              <h3 className="text-lg font-semibold text-gray-800 text-center transform group-hover:translate-y-0 transition-transform duration-300">
                {image.title}
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;