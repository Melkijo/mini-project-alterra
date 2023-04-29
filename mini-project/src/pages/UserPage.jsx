import { useAtom } from "jotai";
import { textAtom } from "../components/Atoms";
import { Link } from "react-router-dom";
export default function UserPage() {
  const [userName] = useAtom(textAtom);
  return (
    <>
      <h1 className="text-3xl font-bold">hai {userName}</h1>
      <Link to="/">Home</Link>
    </>
  );
}
