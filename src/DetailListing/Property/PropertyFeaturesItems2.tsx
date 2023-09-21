import PropertyFeaturesItem from './PropertyFeaturesItem';

const PropertyFeaturesItems2 = () => {
  return (
    <div className='grid grid-cols-2 gap-8 mt-4 md:mt-8'>
      <div className='space-y-4'>
        <PropertyFeaturesItem name={'Balcony'} />
        <PropertyFeaturesItem name={'Fitness Center'} />
        <PropertyFeaturesItem name={'Barbeque'} />
        <PropertyFeaturesItem name={'Sauna'} />
      </div>
      <div className='space-y-4'>
        <PropertyFeaturesItem name={'Swimming Pool'} />
        <PropertyFeaturesItem name={'Studio'} />
        <PropertyFeaturesItem name={'Soccer Field'} />
        <PropertyFeaturesItem name={'Gym'} />
      </div>
    </div>
  );
};

export default PropertyFeaturesItems2;
