import Provider from '../Services/Providers/Provider';
import AboutUs from './AboutUs/AboutUs';
import Hero from './Hero/Hero';
import History from './History/History';
import Team from './Team/Team';
const About = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Provider title='Our Trusted Partners' />
      <History />
      <Team />
    </main>
  );
};

export default About;
