import ListingItem from '../../Listing/Listing/ListingItem';
import { dataListing } from '../../Listing/data';

const OtherPropertyList = () => {
  return (
    <div className='mt-4'>
      <div className='grid gap-y-8 gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-1'>
        {dataListing.map(item => {
          if (item.id <= 2)
            return <ListingItem key={item.id} homeData={item} />;
        })}
      </div>
    </div>
  );
};

export default OtherPropertyList;
