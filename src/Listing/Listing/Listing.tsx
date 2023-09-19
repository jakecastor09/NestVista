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
            <ListingItem
              key={item.id}
              image={item.image}
              price={item.price}
              name={item.name}
              address={item.address}
              square={item.square}
              bedroom={item.bedroom}
              bathroom={item.bathroom}
            />
          ))}
        </ListingItems>
      </Container>
    </section>
  );
};

export default Listing;
