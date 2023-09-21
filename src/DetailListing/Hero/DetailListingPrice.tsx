const DetailListingPrice = () => {
  return (
    <div className='mt-8 lg:max-w-2xl'>
      <p className='leading-relaxed'>
        Seize the golden opportunity to become the proud owner of a stunning,
        contemporary residence boasting enticing features, all at an incredibly
        accessible and budget-friendly rate.
      </p>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between md:mt-4 lg:mt-8'>
        <h1 className='mt-4 text-3xl md:mt-0 md:text-4xl xl:text-5xl'>
          ₱4,800-
        </h1>
        <button className='bg-pryGreen mt-4  text-white py-3 text-lg font-semibold text-center rounded-full md:px-4 md:mt-0'>
          Request Visit Now!
        </button>
      </div>
    </div>
  );
};

export default DetailListingPrice;
