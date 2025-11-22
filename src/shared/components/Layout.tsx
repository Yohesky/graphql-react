import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="system-grid py-5">
      {/* TODO: navbar */}
      <Outlet />
    </div>
  );
};
