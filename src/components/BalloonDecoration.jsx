const BalloonDecoration = () => {
  const serviceAreas = [
    { name: "RDC", description: "We provide balloon decoration services in Indirapuram for all occasions." },
    { name: "Vasundara", description: "Celebrate your events with our stunning balloon decorations in Vaishali." },
    { name: "Kavi Nagar", description: "Make your events memorable with our creative balloon decorations in Raj Nagar." },
    { name: "Shastri Nagar", description: "Professional balloon decoration services available in Kaushambi." },
    { name: "Noida  ", description: "Transform your events with our beautiful balloon decorations in Vasundhara." },
    { name: "Indirapuram ", description: "Transform your events with our beautiful balloon decorations in Vasundhara." },
    { name: "Ghaziabad ", description: "Transform your events with our beautiful balloon decorations in Vasundhara." },
    { name: "New Delhi  ", description: "Transform your events with our beautiful balloon decorations in Vasundhara." },
    { name: "Raj Nagar Extension ", description: "Transform your events with our beautiful balloon decorations in Vasundhara." },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <h1 className="text-4xl font-bold text-center text-red-400 mb-6">
        Happy Balloon Decoration Services Area in Ghaziabad
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceAreas.map((area, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-red-400 mb-2">{area.name}</h2>
            <p className="text-gray-600">{area.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BalloonDecoration;