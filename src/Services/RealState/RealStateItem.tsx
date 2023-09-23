import { AiFillCheckCircle } from 'react-icons/ai';
interface Props {
  name: string;
}
const RealStateItem = ({ name }: Props) => {
  return (
    <div className='flex space-x-4 items-center'>
      <AiFillCheckCircle size='20px' />
      <p className='text-xs md:text-sm'>{name}</p>
    </div>
  );
};

export default RealStateItem;
