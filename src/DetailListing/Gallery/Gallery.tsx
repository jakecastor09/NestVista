import gallery1 from '../../assets/gallery-1.webp';
import gallery2 from '../../assets/gallery-2.webp';
import gallery3 from '../../assets/gallery-3.webp';
import gallery4 from '../../assets/gallery-4.webp';

const Gallery = () => {
  return (
    <div className='grid grid-cols-2 gap-4 mt-4'>
      <img src={gallery1} alt='' className='rounded-xl' />
      <img src={gallery2} alt='' className='rounded-xl' />
      <img src={gallery3} alt='' className='rounded-xl' />
      <img src={gallery4} alt='' className='rounded-xl' />
    </div>
  );
};

export default Gallery;
