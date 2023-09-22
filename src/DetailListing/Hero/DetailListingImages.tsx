import details2 from '../../assets/details-2.webp';
import details3 from '../../assets/details-3.webp';
import { BsPlayCircle } from 'react-icons/bs';
interface Props {
  houseImage: string | undefined;
}
const DetailListingImages = ({ houseImage }: Props) => {
  return (
    <div className='grid grid-cols-1 gap-2 md:grid-cols-3 mt-8'>
      <div className='md:col-span-2 relative cursor-pointer'>
        <div className='absolute inset-0 bg-black opacity-60 z-10 rounded-2xl'></div>
        <div className='absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <BsPlayCircle size='42px' color='white' />
        </div>
        <img
          src={houseImage}
          alt=''
          className='rounded-2xl relative z-1 object-cover md:h-full md:object-fill blur-sm '
        />
      </div>

      <div className='grid grid-cols-2 gap-2 md:grid-cols-1'>
        <img src={details2} alt='' className=' rounded-2xl ' />
        <img src={details3} alt='' className='rounded-2xl ' />
      </div>
    </div>
  );
};

export default DetailListingImages;
