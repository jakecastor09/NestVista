import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ProvidersItemsContainer = ({ children }: Props) => {
  return (
    <div className='mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:mt-8'>
      {children}
    </div>
  );
};

export default ProvidersItemsContainer;
