import React from "react";

function About() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 mx-30">
      <h3 className="text-4xl font-bold text-center text-red-400 mb-6">
        About Us
      </h3>
      <div className="max-w-7xl mx-auto">
        <p className="text-xl text-gray-800 text-center mb-12">
          We believe that every event deserves to be extraordinary. Specializing in creating unforgettable balloon decorations, we bring your vision to life with creative and personalized designs that transform any occasion. Whether it’s a birthday, wedding, corporate event, or any special celebration, our team has the expertise to design and execute breathtaking balloon displays that captivate and amaze.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* About Section 1 */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At the heart of everything we do is a passion for transforming ordinary spaces into extraordinary experiences. Our mission is to bring joy, creativity, and elegance to every event through the art of balloon decorations. We aim to deliver high-quality, customized balloon designs that reflect the uniqueness of each celebration, ensuring that every detail exceeds our clients’ expectations.
              Our mission is to not just decorate, but to inspire. To make every celebration feel special, unique, and perfectly tailored to the vision of our clients. We are here to turn your dream event into a reality, one balloon at a time.
            </p>
          </div>

          {/* About Section 2 */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              Our vision is to be the leading provider of innovative and beautiful balloon decorations, creating unforgettable experiences for every occasion. We aspire to be recognized for our creativity, exceptional service, and ability to bring joy and elegance to events of all sizes.
              We aim to redefine the art of event decoration, pushing boundaries with each design, and continuously inspiring our clients with fresh, unique ideas. Our vision is to build lasting relationships with our clients by providing them with personalized, high-quality services that exceed expectations.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          {/* <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
            Learn More
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default About;
