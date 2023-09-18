interface Props {
  id: number;
  title: string;
  description: string;
}
const StepItem = ({ id, title, description }: Props) => {
  return (
    <div className='space-y-2'>
      <div className='bg-textTitle rounded-full font-bold flex justify-center items-center text-white h-8 w-8 mb-3'>
        {id}
      </div>
      <h1 className='md:text-xl lg:text-2xl'>{title}</h1>
      <p className='leading-loose'>{description}</p>
    </div>
  );
};

export default StepItem;
