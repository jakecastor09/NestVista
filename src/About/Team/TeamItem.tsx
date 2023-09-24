interface Props {
  image: string;
  name: string;
  position: string;
}
const TeamItem = ({ image, name, position }: Props) => {
  return (
    <div>
      <img
        src={image}
        alt=''
        className='rounded-xl w-full object-cover max-h-[380px]'
      />
      <h1 className='mt-4 md:text-2xl xl:text-3xl'>{name}</h1>
      <p className='mt-2'>{position}</p>
    </div>
  );
};

export default TeamItem;
