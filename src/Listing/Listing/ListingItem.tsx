import { FaMapMarkerAlt, FaBed } from 'react-icons/fa';
import { PiGridFourLight, PiShowerFill } from 'react-icons/pi';
interface Props {
  image: string;
  price: number;
  name: string;
  address: string;
  square: number;
  bedroom: number;
  bathroom: number;
}
const ListingItem = ({
  image,
  price,
  name,
  address,
  square,
  bedroom,
  bathroom,
}: Props) => {
  return (
    <div className=''>
      <div className='relative'>
        <img
          src={image}
          alt=''
          className='md:h-[220px] object-cover rounded-xl'
        />
        <div className='bg-pryBlue text-xs font-bold absolute top-4 left-4 text-white rounded-full py-2 px-5'>
          ${price}-
        </div>
      </div>
      <div className='mt-3 flex flex-col space-y-2'>
        <h1>{name}</h1>
        <p className='flex items-center'>
          <span className='mr-2'>
            <FaMapMarkerAlt color='black' />
          </span>
          {address}
        </p>
        <div className='flex gap-2 bg-lightGray rounded-lg px-2 p-2 w-max'>
          <div className='flex items-center space-x-1'>
            <PiGridFourLight color='black' size='20px' />
            <p className='text-xs'>{square} Sq Ft</p>
          </div>
          <div className='flex items-center space-x-1'>
            <FaBed color='black' size='18px' />
            <p className='text-xs'>{bedroom} Bedroom</p>
          </div>
          <div className='flex items-center space-x-1'>
            <PiShowerFill color='black' size='18px' />
            <p className='text-xs'>{bathroom} Bathroom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
