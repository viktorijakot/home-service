import router from "./Router";

export const getNavLinks = () => {
  const extractNavLinks = (routes) =>
    routes
      .filter((route) => route.navLinkInfo)
      .map((route) => ({
        path: route.path,
        text: route.navLinkInfo,
      }));

  const routes = router.routes[0].children;
  return extractNavLinks(routes);
};
