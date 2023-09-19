import Container from '../Container/Container';
import TestimonialHeader from './TestimonialHeader';
import TestimonialList from './TestimonialList';

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <Container>
        <TestimonialHeader />
        <TestimonialList />
      </Container>
    </section>
  );
};

export default Testimonial;
