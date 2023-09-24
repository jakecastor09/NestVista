import CallToAction from '../../section/CTA/CallToAction';
import Featured from '../Featured/Featured';
import Hero from '../Hero/Hero';
import Provider from '../Providers/Provider';
import RealState from '../RealState/RealState';

const Services = () => {
  return (
    <main>
      <Hero />
      <Featured />
      <RealState />
      <Provider title='Our Providers' />
      <CallToAction />
    </main>
  );
};

export default Services;
