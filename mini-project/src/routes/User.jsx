import { Outlet } from "react-router-dom";
import UserSidebar from "../components/UserSidebar";

export default function User() {
  return (
    <>
      <div className="flex">
        <UserSidebar />
        <Outlet />
      </div>
    </>
  );
}
