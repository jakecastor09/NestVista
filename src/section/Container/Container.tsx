import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  return (
    <div className='container mx-auto px-4 py-8 md:px-40 md:py-10 xl:px-18 xl:py-20'>
      {children}
    </div>
  );
};

export default Container;
