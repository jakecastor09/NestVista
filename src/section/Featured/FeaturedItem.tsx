import { FaLocationDot } from 'react-icons/fa6';
interface Props {
  name: string;
  price: number;
  street: string;
  image: string;
}
const FeaturedItem = ({ name, price, street, image }: Props) => {
  return (
    <div>
      <div className='relative'>
        <div className='absolute left-4 top-4 bg-pryBlue text-white py-2 px-6 inline-block rounded-full font-bold'>
          ${price}-
        </div>
        <img
          src={image}
          alt=''
          className='min-h-[240px] object-cover w-100% rounded-2xl'
        />
      </div>
      <div className='mt-4'>
        <h1>{name}</h1>
        <p className='flex items-center mt-1'>
          <span className='mr-2'>
            <FaLocationDot color='black' />
          </span>
          {street}
        </p>
      </div>
    </div>
  );
};

export default FeaturedItem;
