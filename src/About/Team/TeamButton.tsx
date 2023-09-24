const TeamButton = () => {
  return (
    <div className='mt-8 flex flex-col md:flex-row md:justify-between md:items-center md:space-x-4'>
      <p className='leading-loose'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className='mt-4 rounded-full bg-white border border-pryBlue py-2 w-full  md:w-28 hover:text-white hover:bg-pryBlue duration-200'>
        See More
      </button>
    </div>
  );
};

export default TeamButton;
