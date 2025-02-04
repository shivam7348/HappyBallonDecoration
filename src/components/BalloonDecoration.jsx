const BalloonDecoration = () => {
  const serviceAreaPairs = [
    { names: ["RDC & Kavi Nagar"], description: "We provide balloon decoration services in RDC and Kavi Nagar for all occasions." },
    { names: ["Vasundhara & Indirapuram"], description: "Celebrate your events with our stunning balloon decorations in Vasundhara and Indirapuram." },
    { names: ["Noida & New Delhi"], description: "Make your events memorable with our creative balloon decorations in Noida and New Delhi." },
    { names: ["Raj Nagar Extension & Shastri Nagar"], description: "Professional balloon decoration services available in Raj Nagar Extension and Shastri Nagar." },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
        <h1 className="text-4xl font-bold text-center text-red-400 mb-6">
          Happy Balloon Decoration Services Area in Ghaziabad
        </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviceAreaPairs.map((pair, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-red-400 mb-2">
              {pair.names.join(" & ")}
            </h2>
            <p className="text-gray-600">{pair.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BalloonDecoration;