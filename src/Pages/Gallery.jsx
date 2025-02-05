
import welcomebaby from '../assets/birthdayImage/welcomebaby.mp4'
const Gallery = ({ images }) => {
  return (
    <div className="container mx-auto px-4 py-8">
    <div>
      <h3 className="text-4xl font-bold text-center text-red-400 mb-10">
        Our Gallery
      </h3>
    </div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-4 sm:mx-6 md:mx-12 lg:mx-20">
      {images.map((image, index) => (
        <div
          key={index}
          className="rounded-lg shadow-lg overflow-hidden group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
        >
          <div className="relative h-60">
            {image.type === 'video' ? (
              <video
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                controls
                muted
                loop
              >
                <source src={welcomebaby} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            )}
  
            {/* Overlay with text */}
            <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <h3 className="text-lg font-semibold text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.title}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Gallery;