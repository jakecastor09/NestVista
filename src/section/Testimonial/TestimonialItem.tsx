

interface Props {
  message: string;
  name: string;
  subName: string;
  image: string;
}
const TestimonialItem = ({ message, name, subName, image }: Props) => {
  return (
    <div className='p-4 space-y-4  rounded-xl first:shadow-xl'>
      <p className='leading-loose'>{message}</p>
      <div className='flex items-center space-x-4'>
        <img src={image} alt='' className='rounded-full w-[32px] h-[32px]' />
        <div>
          <h1>{name}</h1>
          <p>{subName}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
