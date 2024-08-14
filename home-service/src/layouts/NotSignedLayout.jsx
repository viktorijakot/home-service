import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const NotSignedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default NotSignedLayout;
