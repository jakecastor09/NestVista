import { FaLocationDot } from 'react-icons/fa6';
import { PiGridFour } from 'react-icons/pi';
import { FaBed } from 'react-icons/fa';
interface Props {
  address: string | undefined;
  square: number | undefined;
  bedroom: number | undefined;
  bathroom: number | undefined;
}
const DetailListingContent = ({
  address,
  square,
  bedroom,
  bathroom,
}: Props) => {
  return (
    <div className='flex flex-col mt-8 md:flex-row lg:max-w-2xl'>
      <div>
        <p className='leading-relaxed'>
          Our meticulously designed homes offer a perfect blend of contemporary
          architecture and minimalist aesthetics, creating a serene environment
          that harmonizes with your lifestyle..
        </p>
        <p className='flex items-center mt-4 lg:mt-8'>
          <span className='mr-2'>
            <FaLocationDot color='black' size='18px' />
          </span>
          {address}
        </p>
        <div className='bg-lightGray mt-4 rounded-full p-2 flex justify-between text-sm md:px-4'>
          <div className='flex items-center space-x-2'>
            <PiGridFour size='18px' />
            <p>{square} Sq Ft</p>
          </div>
          <div className='flex items-center space-x-2'>
            <FaBed size='18px' />
            <p>{bedroom} bedroom</p>
          </div>
          <div className='flex items-center space-x-2'>
            <PiGridFour size='18px' />
            <p>{bathroom} bathroom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailListingContent;
