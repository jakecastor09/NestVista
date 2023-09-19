import Choose from './section/Choose/Choose';
import Featured from './section/Featured/Featured';
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
    </>
  );
}

export default App;
