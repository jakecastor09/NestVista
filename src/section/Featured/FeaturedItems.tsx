import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
const FeaturedItems = ({ children }: Props) => {
  return (
    <div className='grid mt-8 grid-cols-1 mx-auto gap-4 md:mt-12 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1'>
      {children}
    </div>
  );
};

export default FeaturedItems;
