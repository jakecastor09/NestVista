import { BiSearch } from 'react-icons/bi';
const HeroForm = () => {
  return (
    <div className='rounded-full mt-6 px-2 py-2 flex justify-between bg-lightGray md:mt-10'>
      <div className='ml-4 w-1/2 space-x-1  flex items-center'>
        <span>
          <BiSearch />
        </span>
        <input
          type='text'
          className='outline:none flex-1 text-textBody bg-transparent focus:outline-none'
          placeholder='Search Here'
        />
      </div>
      <button className='rounded-full text-white bg-pryGreen font-semibold px-8 py-3 hover:opacity-90 duration-200'>
        Search
      </button>
    </div>
  );
};

export default HeroForm;
