import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Utama</Link>
      </div>
      <div>
        <Link to="/beasiswa">Beasiswa</Link>
      </div>
      <div>
        <Link to="/tentang">Tentang</Link>
      </div>
      <div>
        <Link to="/masuk">Masuk</Link>
      </div>
      <div>
        <Link to="/daftar">Daftar</Link>
      </div>
    </nav>
  );
}
