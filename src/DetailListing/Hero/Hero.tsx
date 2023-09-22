import Container from '../../components/Container';
import DetailListingContent from './DetailListingContent';
import DetailListingHeader from './DetailListingHeader';
import DetailListingImages from './DetailListingImages';
import DetailListingPrice from './DetailListingPrice';
import { useParams } from 'react-router-dom';
import { dataListing } from '../../Listing/data';
const Hero = () => {
  const { details } = useParams();

  if (!details) return;
  const id = details?.split('-').reverse()[0];
  const house = dataListing.find(item => item.id === +id);

  return (
    <section>
      <Container>
        <DetailListingHeader name={house?.name} />
        <DetailListingImages houseImage={house?.image} />
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 md:mt-4'>
          <DetailListingContent
            address={house?.address}
            square={house?.square}
            bedroom={house?.bedroom}
            bathroom={house?.bathroom}
          />
          <DetailListingPrice price={house?.price} />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
