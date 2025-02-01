
import Gallery from './Gallery';

const images = [
  {
    src: 'https://www.eventfaqs.com/Uploads/News/Content/whatsapp-image-2023-10-20-at-12.30.25-pm.jpg',
    alt: 'Image 1',
    title: 'Wedding Decoration',
    description: 'Wedding Decoration',
  },
  {
    src: 'https://images.prismic.io/eventsgyani/edb4a350-ba27-4b99-9c8c-28526310ea52_13.+colorful+drapes+decor.jpg?auto=compress,format&rect=0,0,916,610&w=740&h=493',
    alt: 'Image 2',
    title: 'Party Decoration',
    description: 'Party Decoration.',
  },
  {
    src: 'https://via.placeholder.com/400',
    alt: 'Image 3',
    title: 'Image 2 Title',
    description: 'This is a description for Image 2.',
  },
  {
    src: 'https://via.placeholder.com/400',
    alt: 'Image 4',
    title: 'Image 2 Title',
    description: 'This is a description for Image 2.',
  },
  {
    src: 'https://via.placeholder.com/400',
    alt: 'Image 5',
    title: 'Image 2 Title',
    description: 'This is a description for Image 2.',
  },
  {
    src: 'https://via.placeholder.com/400',
    alt: 'Image 6',
    title: 'Image 2 Title',
    description: 'This is a description for Image 2.',
  },
  // Add more images as needed
];

function GalleryData() {
  return (
    <div>
      <Gallery images={images} />
    </div>
  );
}

export default GalleryData;