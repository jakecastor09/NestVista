import Hero from '../Hero/Hero';
import OtherProperty from '../OtherProperty/OtherProperty';
import Property from '../Property/Property';

const DetailListingPage = () => {
  return (
    <>
      <Hero />
      <div className='grid col-span-2 grid-cols-1 lg:grid-cols-3 lg:gap-4'>
        <div className='col-span-2'>
          <Property />
        </div>
        <OtherProperty />
      </div>
    </>
  );
};

export default DetailListingPage;
