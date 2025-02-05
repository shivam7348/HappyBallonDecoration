import React from 'react';
import welcomebaby from '../assets/birthdayImage/welcomebaby.mp4'

const Gallery = ({ images }) => {
  return (
    <div className="p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side - Card Grid */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-64">
                {image.type === "video" ? (
                  <video
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${
                      image.orientation === "portrait" ? "object-top" : "object-center"
                    }`}
                    autoPlay
                    loop
                    muted
                  >
                    <source src={image.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                {/* Hover Overlay */}
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-lg font-semibold text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Portrait Video */}
        <div className="w-full lg:w-1/4 flex flex-col gap-6">
          <div className="sticky top-6">
            <video
              className="w-full h-[600px] rounded-lg shadow-lg object-cover"
              autoPlay
              loop
              controls
              muted
            >
              <source src={welcomebaby} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;