import FeaturedListItem from './FeaturedListItem';

const FeaturedList = () => {
  return (
    <div className='grid grid-cols-1 gap-4 mt-8 lg:mt-12 md:grid-cols-2 lg:grid-cols-4'>
      <FeaturedListItem name={'Residential Building'} />
      <FeaturedListItem name={'Individual House Building'} />
      <FeaturedListItem name={'Corporate Building'} />
      <FeaturedListItem name={'Commercial Building'} />
    </div>
  );
};

export default FeaturedList;
