import { FaLocationDot } from 'react-icons/fa6';
import { HomeData } from '../../Listing/data';
import { useNavigate } from 'react-router-dom';
interface Props {
  homeData: HomeData;
}
const FeaturedItem = ({ homeData }: Props) => {
  const navigate = useNavigate();
  const onHandleClick = () => {
    const path = `/listing/details-${homeData.id}`;
    navigate(path);
  };
  return (
    <div>
      <div className='group relative cursor-pointer' onClick={onHandleClick}>
        <div className='absolute z-10 group-hover:scale-105 left-4 top-4 bg-pryBlue text-white py-2 shadow-sm px-6 inline-block rounded-full font-bold duration-200'>
          ${homeData.price}-
        </div>
        <img
          src={homeData.image}
          alt=''
          className='min-h-[240px] object-cover w-100% rounded-2xl group-hover:scale-105 duration-200'
        />
      </div>
      <div className='mt-4'>
        <h1>{homeData.name}</h1>
        <p className='flex items-center mt-1'>
          <span className='mr-2'>
            <FaLocationDot color='black' />
          </span>
          {homeData.address}
        </p>
      </div>
    </div>
  );
};

export default FeaturedItem;
