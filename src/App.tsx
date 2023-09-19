import CallToAction from './section/CTA/CallToAction';
import Choose from './section/Choose/Choose';
import Featured from './section/Featured/Featured';
import Footer from './section/Footer/Footer';
import Hero from './section/Hero/Hero';
import MissionVision from './section/MissionVision/MissionVision';
import Navbar from './section/Navbar/Navbar';
import Step from './section/Step/Step';
import Testimonial from './section/Testimonial/Testimonial';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <MissionVision />
      <Step />
      <Choose />
      <Testimonial />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
