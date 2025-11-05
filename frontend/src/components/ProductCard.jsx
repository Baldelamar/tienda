export default function ProductCard({ product, onBuy }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '1rem',
      width: '250px',
      textAlign: 'center'
    }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '10px', height: 150, objectFit: 'cover' }} />
      <h3>{product.name}</h3>
      <p style={{ minHeight: 40 }}>{product.description}</p>
      <p><b>${product.price}</b> MXN</p>
      <button
        onClick={() => onBuy(product)}
        style={{
          background: '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
        Comprar
      </button>
    </div>
  );
}
