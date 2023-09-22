import Container from '../../components/Container';
import Gallery from '../Gallery/Gallery';
import PropertyFeaturesContainer from './PropertyFeaturesContainer';
import PropertyFeaturesItems1 from './PropertyFeaturesItems1';
import PropertyFeaturesItems2 from './PropertyFeaturesItems2';
import Location from '../Location/Location';

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
        <Location />
      </Container>
    </section>
  );
};

export default Property;
