import { textAtom } from "../components/Atoms";
import { useAtom } from "jotai";
export default function LandingPage() {
  const [userName] = useAtom(textAtom);
  return (
    <div>
      <h1 className="text-3xl font-bold">Ini Halaman Utama</h1>
      <h3>welcome back {userName}</h3>
    </div>
  );
}
