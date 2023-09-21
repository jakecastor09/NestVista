import { createBrowserRouter } from 'react-router-dom';
import DetailListingPage from './DetailListing/DetailListingPage/DetailListingPage';
import ListingPage from './Listing/ListingPage/ListingPage';
import Layout from './layout/Layout';
import HomePage from './section/HomePage/HomePage';

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
            element: <DetailListingPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
