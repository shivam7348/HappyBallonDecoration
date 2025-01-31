import React from "react";
import ServiceCards from "../components/ServiceCards";

function Products() {
  return (
    <div
      className="min-h-screenbg-[var(--glsr-red)] py-12 px-4 sm:px-6 lg:px-8 "
     
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white text-center mb-8">
          Our Products
        </h1>

        <ServiceCards />
      </div>
    </div>
  );
}

export default Products;
