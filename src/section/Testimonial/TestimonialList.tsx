import TestimonialItem from './TestimonialItem';
import TestimonialItems from './TestimonialItems';
import { testimonialData } from './data';
const TestimonialList = () => {
  return (
    <TestimonialItems>
      {testimonialData.map(item => (
        <TestimonialItem
          key={item.id}
          message={item.message}
          name={item.name}
          subName={item.subName}
          image={item.image}
        />
      ))}
    </TestimonialItems>
  );
};

export default TestimonialList;
