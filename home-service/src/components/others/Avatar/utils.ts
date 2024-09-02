import { NavigateFunction } from "react-router-dom";
import { ROUTES } from "@/router/Routes";
import { DropdownButton } from "../UserDropdownMenu/UserDropdownMenu";

export const getUserDropdownButtons = (navigate: NavigateFunction, logout: () => void): DropdownButton[] => {
  return [
    {
      label: "My Account",
      onClick: () => navigate(ROUTES.BASE),
    },
    {
      label: "My Bookings",
      onClick: () => navigate(ROUTES.MY_BOOKINGS),
    },
    {
      label: "Log Out",
      onClick: () => {
        logout();
        navigate(ROUTES.LOGIN);
      },
    },
  ];
};
