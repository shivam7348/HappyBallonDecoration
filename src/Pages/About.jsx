import React from "react";

function About() {
  return (
    <div
      className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8"
      // style={{ backgroundColor: "var(--glsr-red)" }}
    >
      <h3 className="text-4xl font-bold text-center text-red-400 mb-6">
        About Us
      </h3>
      <div className="max-w-7xl mx-auto">
        <p className="text-xl text-gray-800 text-center mb-12">
          We are a team of passionate individuals dedicated to providing the
          best services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Section 1 */}
          <div
            className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-6 "
            style={{ backgroundColor: "var(--glsr-red)" }}
          >
            <h2 className="text-2xl font-bold text-black-800 mb-4">
              Our Mission
            </h2>
            <p className="text-black-600">
              Our mission is to deliver high-quality services that exceed our
              clients' expectations. We strive to innovate and improve
              continuously.
            </p>
          </div>

          {/* About Section 2 */}
          <div
            className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-6"
            style={{ backgroundColor: "var(--glsr-red)" }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-black-600">
              Our vision is to be the leading provider of services in our
              industry, recognized for our commitment to excellence and customer
              satisfaction.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
