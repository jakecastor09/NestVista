import Container from '../../components/Container';
import Gallery from '../Gallery/Gallery';
import PropertyFeaturesContainer from './PropertyFeaturesContainer';
import PropertyFeaturesItems1 from './PropertyFeaturesItems1';
import PropertyFeaturesItems2 from './PropertyFeaturesItems2';

import PropertyHeader from './PropertyHeader';
const Property = () => {
  return (
    <section>
      <Container>
        <PropertyHeader />
        <PropertyFeaturesContainer>
          <PropertyFeaturesItems1 />
          <PropertyFeaturesItems2 />
        </PropertyFeaturesContainer>
        <Gallery />
      </Container>
    </section>
  );
};

export default Property;
