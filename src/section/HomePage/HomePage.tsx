import CallToAction from '../CTA/CallToAction';
import Choose from '../Choose/Choose';
import Featured from '../Featured/Featured';
import Hero from '../Hero/Hero';
import MissionVision from '../MissionVision/MissionVision';
import Step from '../Step/Step';
import Testimonial from '../Testimonial/Testimonial';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Featured />
      <MissionVision />
      <Step />
      <Choose />
      <Testimonial />
      <CallToAction />
    </>
  );
};

export default HomePage;
