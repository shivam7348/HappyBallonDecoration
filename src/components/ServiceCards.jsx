import React from "react";

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      name: "Birthday Decoration",
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      name: "Wedding Decoration",
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      name: "Baby Shower",
      image: "/api/placeholder/400/300",
    },
    {
      id: 4,
      name: "Corporate Events",
      image: "/api/placeholder/400/300",
    },
    {
      id: 5,
      name: "Anniversary Decoration",
      image: "/api/placeholder/400/300",
    },
    {
      id: 6,
      name: "Theme Party",
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {service.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
