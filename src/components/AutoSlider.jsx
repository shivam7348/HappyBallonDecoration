import React, { useState, useEffect } from "react";

const AutoSlider = () => {
  const slides = [
    {
      url: "https://choudharydecoratorsncr.com/wp-content/uploads/2024/11/Birthday.jpg",
      title: "Slide 1",
    },
    {
      url: "https://choudharydecoratorsncr.com/wp-content/uploads/2024/11/Choudhary-Decorators-NCR-choudharydecoratorsncr.com-Baby-Shower-1500-x-600-px.jpg",
      title: "Slide 2",
    },
    {
      url: "https://choudharydecoratorsncr.com/wp-content/uploads/2024/12/www.choudharydecoratorsncr.com_.jpg",
      title: "Slide 3",
    },
    {
      url: "https://choudharydecoratorsncr.com/wp-content/uploads/2024/11/Wedding-Decorations.jpg",
      title: "Slide 4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full  flex items-center justify-center">
      <div className="w-full max-w-11xl ">
        {/* Main slider container */}
        <div className="relative h-[600px] overflow-hidden rounded-lg">
          {/* Slides */}
          <div
            className="absolute w-full h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex h-full">
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full h-full">
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                    <h3 className="text-xl font-semibold">{slide.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPreviousSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Navigation dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
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
