import { FaMapMarkerAlt, FaBed } from 'react-icons/fa';
import { PiGridFourLight, PiShowerFill } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { HomeData } from '../data';
export interface Props {
  homeData: HomeData;
}
const ListingItem = ({ homeData }: Props) => {
  const navigate = useNavigate();
  const onHandleClick = () => {
    const path = `/listing/details-${homeData.id}`;
    navigate(path);
  };
  return (
    <div className='cursor-pointer group' onClick={onHandleClick}>
      <div className='relative'>
        <img
          src={homeData.image}
          alt=''
          className='md:h-[220px] object-cover rounded-xl group-hover:scale-105 duration-200'
        />
        <div className='bg-pryBlue text-xs font-bold absolute top-4 left-4 text-white rounded-full py-2 px-5 group-hover:scale-105 duration-200'>
          ${homeData.price}-
        </div>
      </div>
      <div className='mt-3 flex flex-col space-y-2'>
        <h1>{homeData.name}</h1>
        <p className='flex items-center'>
          <span className='mr-2'>
            <FaMapMarkerAlt color='black' />
          </span>
          {homeData.address}
        </p>
        <div className='flex gap-2 bg-lightGray rounded-lg px-2 p-2 w-max'>
          <div className='flex items-center space-x-1'>
            <PiGridFourLight color='black' size='20px' />
            <p className='text-xs'>{homeData.square} Sq Ft</p>
          </div>
          <div className='flex items-center space-x-1'>
            <FaBed color='black' size='18px' />
            <p className='text-xs'>{homeData.bedroom} Bedroom</p>
          </div>
          <div className='flex items-center space-x-1'>
            <PiShowerFill color='black' size='18px' />
            <p className='text-xs'>{homeData.bathroom} Bathroom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
