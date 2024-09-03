import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ServicesPage from '../pages/ServicesPage/ServicesPage';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import NotSignedLayout from '../layouts/NotSignedLayout';
import LoginRegisterPage from '../pages/LoginRegisterPage/LoginRegisterPage';
import CategoriesPage from '../pages/CategoriesPage/CategoriesPage';
import { ROUTES } from './Routes';
import BusinessPage from '@/pages/BusinessPage/BusinessPage';

// Define navigation data separately
const navLinks = [
  {
    path: ROUTES.BASE,
    element: <HomePage />,
    navLinkInfo: 'Home',
  },
  {
    path: ROUTES.SERVICES,
    element: <ServicesPage />,
    navLinkInfo: 'Services',
  },
  {
    path: ROUTES.ABOUT_US,
    element: <AboutUsPage />,
    navLinkInfo: 'About Us',
  },
];

const router = createBrowserRouter([
  {
    path: ROUTES.BASE,
    element: <NotSignedLayout />,
    errorElement: <>404 Error</>,
    children: [
      ...navLinks.map(({ path, element }) => ({ path, element })), // Spread the routes without navLinkInfo
      {
        path: ROUTES.LOGIN,
        element: <LoginRegisterPage />,
      },
      {
        path: ROUTES.REGISTER,
        element: <LoginRegisterPage />,
      },
      {
        path: ROUTES.SEARCH_CATEGORY,
        element: <CategoriesPage />,
      },
      {
        path: ROUTES.BUSINESSES_ID,
        element: <BusinessPage />,
      },
    ],
  },
]);

export default router;
export { navLinks };
