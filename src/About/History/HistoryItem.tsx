import { AiFillCheckCircle } from 'react-icons/ai';
interface Props {
  year: string;
  desc: string;
}
const HistoryItem = ({ year, desc }: Props) => {
  return (
    <div className='flex space-y-2 rounded-xl first:shadow-lg flex-col md:space-y-0 md:flex-row p-4 md:space-x-4 md:items-center'>
      <AiFillCheckCircle size='28px' />
      <div>
        <p className='text-sm'>{year}</p>
        <h1 className='mt-2 md:text-2xl'>{desc}</h1>
      </div>
    </div>
  );
};

export default HistoryItem;
