import React from "react";
// import AboutImage from "../assets/about-image.jpg"; // Replace with your image path

function About() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Heading */}
      <h3 className="text-3xl sm:text-4xl font-bold text-center text-red-500 mb-8">
        About Us
      </h3>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto">
        {/* Image & Text Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="w-full">
            {/* <img
              src={AboutImage} // Make sure to add the correct path
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            /> */}
          </div>

          {/* Description */}
          <div className="text-center md:text-left">
            <p className="text-lg sm:text-xl text-gray-800 mb-6">
              We believe that every event deserves to be extraordinary. Specializing in unforgettable balloon decorations, we bring your vision to life with creative and personalized designs that transform any occasion.
            </p>
           
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-0 mt-12">
          {/* Mission Card */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Our mission is to bring joy, creativity, and elegance to every event through the art of balloon decorations. We deliver high-quality, customized designs that reflect the uniqueness of each celebration.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              We aspire to be the leading provider of innovative balloon decorations, pushing boundaries with unique designs and building lasting relationships through exceptional service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
