import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const TestimonialItems = ({ children }: Props) => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 '>
      {children}
    </div>
  );
};

export default TestimonialItems;
