const StepHeader = () => {
  return (
    <div className='flex flex-col gap-4 md:flex-row md:space-x-4 md:items-center xl:gap-8'>
      <h1 className='text-2xl leading-snug md:1/2 md:text-3xl md:leading-normal xl:text-4xl xl:leading-relaxed'>
        Easy Step to Buy Property on NestVista Real Estate
      </h1>
      <p className='leading-loose mt-2 md:1/2 md:mt-0'>
        Visit the NestVista website and browse through their property listings
        to find options that match your preferences..
      </p>
    </div>
  );
};

export default StepHeader;
