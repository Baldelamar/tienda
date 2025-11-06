import { Link } from "react-router-dom";
import "./Navbar.css"; // Archivo CSS personalizado

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Mi Tienda</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Inicio</Link>
        </div>
      </div>
    </nav>
  );
}
