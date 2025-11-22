import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <div className="system-grid py-5">
      <Navbar />
      <Outlet />
    </div>
  );
};
