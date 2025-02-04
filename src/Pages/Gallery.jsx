
const Gallery = ({ images }) => {
  return (
    <div className="container mx-auto px-4 py-8">
  {/* Heading */}
  <div>
    <h3 className="text-4xl font-bold text-center text-red-400 mb-10">
      Our Gallery
    </h3>
  </div>

  {/* Images and Video Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-4 sm:mx-6 md:mx-12 lg:mx-20">
    {images.map((image, index) => (
      <div
        key={index}
        className="rounded-lg shadow-lg overflow-hidden group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
      >
        {/* Image or Video Section */}
        <div className="relative h-60">
          {image.type === 'video' ? (
            // Video Element
            <video
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              controls
              muted
              loop
            >
              <source src={image.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            // Image Element
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          )}
          {/* Overlay */}
          <div className="absolute inset-0  bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <h3 className="text-lg font-semibold text-white text-center">
              {/* {image.title} */}
            </h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-2 flex flex-col items-center justify-center bg-[var(--glsr-red)] opacity">
          <h3 className="text-lg font-semibold text-gray-800 text-center transform group-hover:translate-y-0 transition-transform duration-300">
            {image.title}
          </h3>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default Gallery;