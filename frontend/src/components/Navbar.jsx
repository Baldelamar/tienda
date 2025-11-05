import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      background: '#222',
      padding: '1rem',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2>🛍️ Mi Tienda</h2>
      <div>
        <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Inicio</Link>
        <Link to="/success" style={{ color: 'white' }}>Mis compras</Link>
      </div>
    </nav>
  );
}
