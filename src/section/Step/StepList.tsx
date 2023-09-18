import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const StepList = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4 mt-4 md:mt-8 xl:mt-12'>
      {children}
    </div>
  );
};

export default StepList;
