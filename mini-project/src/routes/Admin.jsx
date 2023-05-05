import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";

export default function User() {
  return (
    <>
      <div className=" flex">
        <AdminSidebar />
        <Outlet />
      </div>
    </>
  );
}
