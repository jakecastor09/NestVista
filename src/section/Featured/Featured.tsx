import Container from '../Container/Container';
import FeaturedHeader from './FeaturedHeader';
import FeaturedItem from './FeaturedItem';
import FeaturedItems from './FeaturedItems';
import featured1 from '../../assets/featured-1.webp';
import featured2 from '../../assets/featured-2.webp';
import featured3 from '../../assets/featured-3.webp';
import featured4 from '../../assets/featured-4.webp';

const Featured = () => {
  return (
    <section id='featured'>
      <Container>
        <FeaturedHeader />
        <FeaturedItems>
          <FeaturedItem
            name='Ataz Standard House'
            price={2800}
            street='Street, Indonesia'
            image={featured1}
          />
          <FeaturedItem
            name='Qiri Minimalist House'
            price={4800}
            street='Street, Indonesia'
            image={featured2}
          />
          <FeaturedItem
            name='Qanan Luxury House'
            price={6800}
            street='Street, Indonesia'
            image={featured3}
          />
          <FeaturedItem
            name='Tingah Elegant House'
            price={8800}
            street='Street, Indonesia'
            image={featured4}
          />
        </FeaturedItems>
        <div className='flex mt-8 flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between '>
          <p className='leading-relaxed md:max-w-lg lg:max-w-full'>
            Explore a world of possibilities with our stunning homes designed to
            elevate your lifestyle.
          </p>
          <button className='border border-pryBlue bg-white rounded-full py-3 md:px-8 hover:bg-pryBlue hover:text-white duration-200'>
            See More
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Featured;
