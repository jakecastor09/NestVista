interface Props {
  name: string | undefined;
}
const DetailListingHeader = ({ name }: Props) => {
  return (
    <div>
      <h1 className='text-3xl md:text-4xl xl:text-5xl'>{name}</h1>
      <p className='mt-4 leading-relaxed'>
        Discover your dream abode House, where modern living meets timeless
        design.
      </p>
    </div>
  );
};

export default DetailListingHeader;
