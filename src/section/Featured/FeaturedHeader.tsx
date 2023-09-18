const FeaturedHeader = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between'>
      <h1 className='text-2xl mb-4 md:w-1/2 md:text-3xl md:mb-0 lg:4xl'>
        Featured Listing
      </h1>
      <p className='md:w-1/2 md:leading-relaxed'>
        Discover a range of dream homes perfectly suited for your family's
        blissful living experience. Find your ideal abode
      </p>
    </div>
  );
};

export default FeaturedHeader;
