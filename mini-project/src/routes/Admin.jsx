import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { authAtom } from "../components/Atoms";
import AdminSidebar from "../components/AdminSidebar";

export default function User() {
  const navigate = useNavigate();
  const [userx] = useAtom(authAtom);
  if (userx.token !== import.meta.env.VITE_ADMIN_COOK) {
    navigate("/");
  }
  return (
    <>
      <div>
        <AdminSidebar />
      </div>
    </>
  );
}
