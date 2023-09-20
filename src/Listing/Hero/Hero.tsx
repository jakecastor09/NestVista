import Container from '../../components/Container';

const Hero = () => {
  return (
    <section id='section-hero'>
      <Container>
        <h1 className='text-3xl text-center md:text-4xl lg:text-5xl'>
          Our Listing
        </h1>
        <p className='text-center leading-loose mt-4 lg:max-w-xl lg:mx-auto'>
          Discover a variety of properties suited to different preferences and
          budgets, each showcasing unique features and amenities.
        </p>
      </Container>
    </section>
  );
};

export default Hero;
