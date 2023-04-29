import { Link } from "react-router-dom";
import { textAtom } from "../components/Atoms";
import { useAtom } from "jotai";
export default function UserSidebar() {
  const [userName] = useAtom(textAtom);
  return (
    <>
      <h1 className="text-3xl font-bold">Ini user sidebar</h1>
      <h3 className="text-2xl font-bold">welcome back {userName}</h3>
      <div>
        <Link to="/beasiswa">Beasiswa</Link>
      </div>
      <div>
        <Link to="/tentang">Akun</Link>
      </div>
    </>
  );
}
