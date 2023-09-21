import { AiFillCheckCircle } from 'react-icons/ai';

interface Props {
  name: string;
}
const PropertyFeaturesItem = ({ name }: Props) => {
  return (
    <div className='flex items-center space-x-2'>
      <AiFillCheckCircle />
      <p>{name}</p>
    </div>
  );
};

export default PropertyFeaturesItem;
