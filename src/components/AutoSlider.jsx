import React, { useState, useEffect } from "react";
import image1 from "../assets/2025.png";
import image2 from "../assets/weeding.png";
import image3 from "../assets/birthday.png";
import image4 from "../assets/corporateEvents.png";



const AutoSlider = () => {
  const slides = [
    { url: image1 },
   {url: image2},
   {url: image3},
   {url: image4},

   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="w-full max-w-11xl">
        <div className="relative h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
          <div className="absolute w-full h-full flex transition-all duration-500 ease-in-out">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity transform ${
                  index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                } duration-500 ease-in-out`}
              >
                <img
                  src={slide.url}
                  className="w-full h-full object-cover"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white bg-opacity-90 p-2 sm:p-3 rounded-full hover:bg-opacity-75 transition-opacity duration-300"
            aria-label="Previous slide"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white bg-opacity-90 p-2 sm:p-3 rounded-full hover:bg-opacity-75 transition-opacity duration-300"
            aria-label="Next slide"
          >
            &#8594;
          </button>

          {/* Navigation dots */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoSlider;
