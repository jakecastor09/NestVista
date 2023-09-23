import Container from '../../components/Container';

const Hero = () => {
  return (
    <Container>
      <header className='text-center'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl'>Our Services</h1>
        <p className='mt-4 leading-loose lg:max-w-xl lg:mx-auto xl:max-w-2xl'>
          Our comprehensive range of services is designed to simplify the
          selling process, ensuring a swift and successful sale, all while
          prioritizing your needs and preferences.
        </p>
      </header>
    </Container>
  );
};

export default Hero;
