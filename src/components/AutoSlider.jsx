import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import image1 from "../assets/2025.png";
import image2 from "../assets/weeding.png";
import image3 from "../assets/birthday.png";
import image4 from "../assets/corporateEvents.png";

const AutoSlider = () => {
  const slides = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right"); // Track slide direction
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000); // Autoplay every 5 seconds

      return () => clearInterval(timer);
    }
  }, [currentIndex, isHovered]);

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Variants for smooth sliding effect
  const slideVariants = {
    hiddenRight: {
      x: "100%",
      scale: 0.8,
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      x: "0%",
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1, // Smooth transition
        ease: "easeInOut",
      },
    },
    exitRight: {
      x: "-100%",
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 1, // Smooth transition
        ease: "easeInOut",
      },
    },
    exitLeft: {
      x: "100%",
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 1, // Smooth transition
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="w-full flex items-center justify-center p-4"
      onMouseEnter={() => setIsHovered(true)} // Pause on hover
      onMouseLeave={() => setIsHovered(false)} // Resume on hover leave
    >
      <div className="w-full max-w-11xl">
        <div className="relative h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg perspective-1000">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit={direction === "right" ? "exitLeft" : "exitRight"}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slides[currentIndex].url}
                className="w-full h-full object-cover"
                alt={`Slide ${currentIndex + 1}`}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white bg-opacity-90 p-2 sm:p-3 rounded-full hover:bg-opacity-75 transition-opacity duration-300 shadow-lg"
            aria-label="Previous slide"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white bg-opacity-90 p-2 sm:p-3 rounded-full hover:bg-opacity-75 transition-opacity duration-300 shadow-lg"
            aria-label="Next slide"
          >
            &#8594;
          </button>

          {/* Navigation dots */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? "right" : "left");
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? "bg-white" : "bg-white/50"
                } hover:bg-white/75`}
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
