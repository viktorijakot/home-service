import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import NotSignedLayout from "../layouts/NotSignedLayout";
import { ROUTES } from "./Routes";

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
        navLinkInfo: "Login",
      },
    ],
  },
]);

export default router;
