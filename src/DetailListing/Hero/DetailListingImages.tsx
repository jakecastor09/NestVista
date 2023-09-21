import details1 from '../../assets/details-1.webp';
import details2 from '../../assets/details-2.webp';
import details3 from '../../assets/details-3.webp';

const DetailListingImages = () => {
  return (
    <div className='grid grid-cols-1 gap-2 md:grid-cols-3 mt-8'>
      <img
        src={details1}
        alt=''
        className='rounded-2xl object-cover md:h-full md:object-fill md:col-span-2 xl:max-h-[818px]'
      />
      <div className='grid grid-cols-2 gap-2 md:grid-cols-1'>
        <img src={details2} alt='' className=' rounded-2xl ' />
        <img src={details3} alt='' className='rounded-2xl ' />
      </div>
    </div>
  );
};

export default DetailListingImages;
