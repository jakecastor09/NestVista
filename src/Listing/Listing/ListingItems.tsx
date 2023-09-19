import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const ListingItems = ({ children }: Props) => {
  return (
    <div className='grid gap-y-8 gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {children}
    </div>
  );
};

export default ListingItems;
