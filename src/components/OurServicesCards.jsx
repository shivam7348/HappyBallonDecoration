import React from "react";

const OurServicesCards = () => {
  const services = [
    {
      id: 1,
      name: "Birthday Decoration",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2024/02/3.jpg",
    },
    {
      id: 2,
      name: "Wedding Decoration",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2024/02/2-1.jpg",
    },
    {
      id: 3,
      name: "Baby Shower",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2024/02/1-3.jpg",
    },
    {
      id: 4,
      name: "Corporate Events",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2024/02/1-3.jpg",
    },
    {
      id: 5,
      name: "Anniversary Decoration",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2024/02/1-4.jpg",
    },
    {
      id: 6,
      name: "Theme Party",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2024/02/1-4.jpg",
    },
    {
      id: 7,
      name: "Graduation Party",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2024/02/3-4.jpg",
    },
    {
      id: 8,
      name: "Engagement Decoration",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2024/02/1-5.jpg",
    },
    {
      id: 9,
      name: "Retirement Party",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2024/02/1-5.jpg",
    },
    {
      id: 10,
      name: "Bridal Shower",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2024/02/3-5.jpg",
    },
    {
      id: 11,
      name: "Product Launch",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2024/02/1-6.jpg",
    },
    {
      id: 12,
      name: "Festival Decoration",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2024/02/choudhury-5.jpeg",
    },
    {
      id: 13,
      name: "Charity Event",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2023/11/81Pnx8djXlL-2048x2048.jpg",
    },
    {
      id: 14,
      name: "School Event",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2023/11/81Pnx8djXlL-2048x2048.jpg",
    },
    {
      id: 15,
      name: "Community Gathering",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2023/11/f5e2d29196fdbe769b8b5da1f50d445f.jpg",
    },
    {
      id: 16,
      name: "Holiday Party",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2023/11/1693661631_original.jpg",
    },
    {
      id: 17,
      name: "Farewell Party",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2023/11/1672057309_2577452571.webp",
    },
    {
      id: 18,
      name: "Welcome Party",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2023/11/premium-rosette-pack-silver-valentine-decoration-items-for-room-367766_533x.webp",
    },
    {
      id: 19,
      name: "Cocktail Party",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2024/02/2-10.jpg",
    },
    {
      id: 20,
      name: "Gala Event",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2024/02/1-12.jpg",
    },
    {
      id: 21,
      name: "Networking Event",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2024/02/1-13.jpg",
    },
    {
      id: 22,
      name: "Award Ceremony",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2023/12/choudhury-10-1.jpeg",
    },
    {
      id: 23,
      name: "Exhibition",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2023/12/choudhury-11.jpeg",
    },
    {
      id: 24,
      name: "Workshop",
      image:
        "https://choudharydecoratorsncr.com/wp-content/uploads/2023/12/choudhury-2.jpeg",
    },
   
  ];

  return (
    <div className=" mx-30 px-4 py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {service.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServicesCards;
