import { AiFillCheckCircle } from 'react-icons/ai';
interface Props {
  title: string;
  description: string;
}
const ChooseItem = ({ title, description }: Props) => {
  return (
    <div className='p-4 rounded-xl first:shadow-xl duration-200 md:max-w-2xl xl:max-w-lg'>
      <div className='md:flex md:space-x-4'>
        <div className='md:mt-2'>
          <AiFillCheckCircle size='32px' />
        </div>
        <div>
          <h3 className='mt-2 md:text-xl xl:text-2xl'>{title}</h3>
          <p className='mt-1 leading-loose md:max-w-xl xl:max-w-md'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseItem;
