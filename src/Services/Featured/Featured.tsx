import Container from '../../components/Container';
import FeaturedList from './FeaturedList';
import FeaturedHeader from './FeaturedHeader';
import servicesFeatured1 from '../../assets/services-featured-1.webp';

const Featured = () => {
  return (
    <section>
      <Container>
        <FeaturedHeader />
        <FeaturedList />
        <img
          src={servicesFeatured1}
          alt=''
          className='rounded-xl w-full md:max-h-[420px] md:object-cover mt-8 lg:mt-12'
        />
      </Container>
    </section>
  );
};

export default Featured;
