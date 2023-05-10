import UserSidebar from "../components/UserSidebar";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { authAtom } from "../components/Atoms";

export default function User() {
  const navigate = useNavigate();
  const [userx] = useAtom(authAtom);
  if (userx.token === import.meta.env.VITE_ADMIN_COOK) {
    navigate("/");
  } else if (userx.token === undefined) {
    navigate("/");
  }
  return (
    <>
      <div>
        <UserSidebar />
      </div>
    </>
  );
}
