import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          🛍️ Mi Tienda
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:underline">
            Inicio
          </Link>
          <Link to="/success" className="hover:underline">
            Mis compras
          </Link>
        </div>
      </div>
    </nav>
  );
}
