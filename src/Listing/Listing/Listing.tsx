import Container from '../../components/Container';
import ListingItem from './ListingItem';
import ListingItems from './ListingItems';
import { dataListing } from '../data';

const Listing = () => {
  return (
    <section>
      <Container>
        <ListingItems>
          {dataListing.map(item => (
            <ListingItem key={item.id} homeData={item} />
          ))}
        </ListingItems>
      </Container>
    </section>
  );
};

export default Listing;
