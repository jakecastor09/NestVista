import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
const PropertyFeaturesContainer = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 mt-4'>
      {children}
    </div>
  );
};

export default PropertyFeaturesContainer;
