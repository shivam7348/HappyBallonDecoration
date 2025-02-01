import React from "react";
import ServiceCards from "../components/ServiceCards";

function Contact() {
  return (
    <div className="min-h-screenbg-[var(--glsr-red)] py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center text-red-400 mb-6">
         Contact
        </h3>

        <ServiceCards />
      </div>
    </div>
  );
}

export default Contact;
