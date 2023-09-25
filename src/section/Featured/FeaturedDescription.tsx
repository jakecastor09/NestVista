import { Link } from 'react-router-dom';

const FeaturedDescription = () => {
  return (
    <div className='flex mt-8 flex-col space-y-4 md:mt-12 md:space-y-0 md:flex-row md:items-center md:justify-between '>
      <p className='leading-loose md:max-w-lg lg:max-w-full'>
        Explore a world of possibilities with our stunning homes designed to
        elevate your lifestyle.
      </p>
      <Link to={'/listing'} hrefLang=''>
        <button className=' border w-full border-pryBlue bg-white rounded-full py-3 md:px-8 hover:bg-pryBlue hover:text-white duration-200'>
          See More
        </button>
      </Link>
    </div>
  );
};

export default FeaturedDescription;
