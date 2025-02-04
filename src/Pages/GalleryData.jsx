

import { images } from '../utils/galleryData';
import Gallery from './Gallery';



function GalleryData() {
  return (
    <div>
      <Gallery images={images} />
    </div>
  );
}

export default GalleryData;