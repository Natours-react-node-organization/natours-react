import { Outlet } from "react-router-dom";
function SettingsRootLayout() {
  return (
    <>
      <p>Tis is the user's profile settings</p>
      <Outlet />
    </>
  );
}

export default SettingsRootLayout;
