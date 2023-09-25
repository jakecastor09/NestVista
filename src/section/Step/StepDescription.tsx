const StepDescription = () => {
  return (
    <div className='flex flex-col mt-8 md:flex-row md:justify-between md:mt-12 xl:mt-16'>
      <p className='leading-loose md:max-w-lg xl:max-w-full'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className='mt-4 border border-pryBlue py-3  rounded-full md: bg-white hover:text-white hover:bg-pryBlue hover:duration-200 md:px-8 md:m-0'>
        See Our FAQ
      </button>
    </div>
  );
};

export default StepDescription;
