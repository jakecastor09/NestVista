import { useParams } from 'react-router-dom';

const DetailListing = () => {
  const params = useParams();
  console.log(params);
  return <div>DetailListing</div>;
};

export default DetailListing;
