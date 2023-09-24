import Container from '../../components/Container';
import AboutHeader from './AboutHeader';
import AboutImage from './AboutImage';
import AboutMissionVission from './AboutMissionVission';

const AboutUs = () => {
  return (
    <section>
      <Container>
        <AboutHeader />
        <AboutImage />
        <AboutMissionVission />
      </Container>
    </section>
  );
};

export default AboutUs;
