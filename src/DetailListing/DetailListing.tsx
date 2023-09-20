import Container from '../components/Container';
import DetailListingHeader from './DetailListingHeader';
import DetailListingImages from './DetailListingImages';

const DetailListing = () => {
  return (
    <section>
      <Container>
        <DetailListingHeader />
        <DetailListingImages />
      </Container>
    </section>
  );
};

export default DetailListing;
