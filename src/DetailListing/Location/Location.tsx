import location1 from '../../assets/location-1.webp';
const Location = () => {
  return (
    <div className='mt-8'>
      <h1 className='text-2xl'>Locations</h1>
      <p className='mt-4 leading-loose'>
        Situated in the heart of the sought-after Maplewood neighborhood, our
        property offers the perfect blend of urban convenience and suburban
        tranquility.
      </p>
      <img
        src={location1}
        alt=''
        className='mt-4 rounded-xl  object-cover hover:scale-105 duration-200'
      />
    </div>
  );
};

export default Location;
