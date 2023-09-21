import Container from '../../components/Container';
import DetailListingContent from './DetailListingContent';
import DetailListingHeader from './DetailListingHeader';
import DetailListingImages from './DetailListingImages';
import DetailListingPrice from './DetailListingPrice';

const Hero = () => {
  return (
    <section>
      <Container>
        <DetailListingHeader />
        <DetailListingImages />
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 md:mt-4'>
          <DetailListingContent />
          <DetailListingPrice />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
