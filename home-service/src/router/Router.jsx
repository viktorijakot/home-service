import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import NotSignedLayout from "../layouts/NotSignedLayout";
import { ROUTES } from "./Routes";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";

const router = createBrowserRouter([
  {
    path: ROUTES.BASE,
    element: <NotSignedLayout />,
    // errorElement: <NotFoundPage />,
    children: [
      {
        path: ROUTES.BASE,
        element: <HomePage />,
        navLinkInfo: "Home",
      },
      {
        path: ROUTES.SERVICES,
        element: <ServicesPage />,
        navLinkInfo: "Services",
      },
      {
        path: ROUTES.ABOUT_US,
        element: <AboutUsPage />,
        navLinkInfo: "About Us",
      },
      {
        path: ROUTES.LOGIN,
        element: <>Login</>,
      },
      {
        path: ROUTES.SEARCH_CATEGORY,
        element: <CategoriesPage />,
      },
    ],
  },
]);

export default router;
