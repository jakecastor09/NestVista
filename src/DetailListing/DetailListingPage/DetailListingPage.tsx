import Hero from '../Hero/Hero';
import OtherProperty from '../OtherProperty/OtherProperty';
import Property from '../Property/Property';

const DetailListingPage = () => {
  window.scrollTo(0, 0);
  return (
    <section id='detailListing'>
      <Hero />
      <div className='grid col-span-2 grid-cols-1 lg:grid-cols-3'>
        <div className='col-span-2'>
          <Property />
        </div>
        <OtherProperty />
      </div>
    </section>
  );
};

export default DetailListingPage;
