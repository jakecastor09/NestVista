import { AiFillCheckCircle } from 'react-icons/ai';
interface Props {
  name: string;
}
const FeaturedListItem = ({ name }: Props) => {
  return (
    <div>
      <div>
        <AiFillCheckCircle size='36px' />
      </div>
      <h1 className='mt-3 md:text-xl xl:text-2xl md:mt-4'>{name}</h1>
      <p className='text-sm leading-loose mt-1 md:mt-2 '>
        Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </div>
  );
};

export default FeaturedListItem;
