import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function NotSignedLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default NotSignedLayout;
