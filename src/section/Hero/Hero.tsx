import Container from '../Container/Container';
import { HeroAchievement } from './HeroAchievement';
import HeroForm from './HeroForm';
import HeroHeader from './HeroHeader';
import heroImg from '../../assets/heroImage.webp';

const Hero = () => {
  return (
    <section id='hero'>
      <Container>
        <div className='flex flex-col lg:flex-row lg:gap-4 xl:gap-32'>
          <div>
            <HeroHeader />
            <HeroForm />
            <HeroAchievement />
          </div>
          <img
            src={heroImg}
            alt=''
            className='rounded-2xl mt-8 object-cover max-h-[480px] w-full lg:mt-0 lg:max-h-none lg:max-w-[448px] xl:max-w-[620px]'
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
