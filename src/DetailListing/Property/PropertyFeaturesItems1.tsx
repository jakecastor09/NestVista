import PropertyFeaturesItem from './PropertyFeaturesItem';

const PropertyFeaturesItems1 = () => {
  return (
    <div className='grid grid-cols-2 gap-8 md:mt-8'>
      <div className='space-y-4'>
        <PropertyFeaturesItem name={'Backyard'} />
        <PropertyFeaturesItem name={'Garage'} />
        <PropertyFeaturesItem name={'Outdoor Kitchen'} />
        <PropertyFeaturesItem name={'Storage Units'} />
      </div>
      <div className='space-y-4'>
        <PropertyFeaturesItem name={'Pet Friendly'} />
        <PropertyFeaturesItem name={'Laundry'} />
        <PropertyFeaturesItem name={'Family Room'} />
        <PropertyFeaturesItem name={'Wi-fi'} />
      </div>
    </div>
  );
};

export default PropertyFeaturesItems1;
