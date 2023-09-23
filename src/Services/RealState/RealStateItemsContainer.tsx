import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
const RealStateItemsContainer = ({ children }: Props) => {
  return (
    <div className='mt-4 grid gap-4 grid-cols-2 md:grid-cols-3 md:mt-6 lg:mt-8'>
      {children}
    </div>
  );
};

export default RealStateItemsContainer;
