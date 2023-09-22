import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  return (
    <div className='container mx-auto overflow-hidden px-4 py-8 md:p-10 lg:px-18 lg:py-20 xl:px-24 xl:py-20'>
      {children}
    </div>
  );
};

export default Container;
