import { Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <>
      <p>MainNavigation</p>
      <Outlet />
    </>
  );
}

export default RootLayout;
