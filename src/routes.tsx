import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './section/HomePage/HomePage';
import ListingPage from './Listing/ListingPage/ListingPage';

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
        ],
      },
    ],
  },
]);

export default router;
