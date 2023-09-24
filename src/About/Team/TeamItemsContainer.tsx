import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
const TeamItemsContainer = ({ children }: Props) => {
  return (
    <div className='mt-4 md:mt-8 lg:mt-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      {children}
    </div>
  );
};

export default TeamItemsContainer;
