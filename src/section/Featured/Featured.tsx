import Container from '../../components/Container';
import FeaturedDescription from './FeaturedDescription';
import FeaturedHeader from './FeaturedHeader';
import FeaturedItem from './FeaturedItem';
import FeaturedItems from './FeaturedItems';
import { dataListing } from '../../Listing/data';
const Featured = () => {
  return (
    <section id='featured'>
      <Container>
        <FeaturedHeader />
        <FeaturedItems>
          {dataListing.map(item => {
            if (item.id <= 4) {
              return <FeaturedItem key={item.id} homeData={item} />;
            }
          })}
        </FeaturedItems>
        <FeaturedDescription />
      </Container>
    </section>
  );
};

export default Featured;
