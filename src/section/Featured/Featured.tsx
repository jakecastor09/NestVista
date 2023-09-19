import Container from '../../components/Container';
import FeaturedHeader from './FeaturedHeader';
import FeaturedItem from './FeaturedItem';
import FeaturedItems from './FeaturedItems';
import featured1 from '../../assets/featured-1.webp';
import featured2 from '../../assets/featured-2.webp';
import featured3 from '../../assets/featured-3.webp';
import featured4 from '../../assets/featured-4.webp';
import FeaturedDescription from './FeaturedDescription';

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
        <FeaturedDescription />
      </Container>
    </section>
  );
};

export default Featured;
