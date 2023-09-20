import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './section/HomePage/HomePage';
import ListingPage from './Listing/ListingPage/ListingPage';
import DetailListing from './DetailListing/DetailListing';

const router = createBrowserRouter([
  {
    // element: <PrivateRoutes />,
    children: [
      {
        path: '/',
        element: <Layout />,

        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: 'listing',
            element: <ListingPage />,
          },
          {
            path: 'listing/:details',
            element: <DetailListing />,
          },
        ],
      },
    ],
  },
]);

export default router;
