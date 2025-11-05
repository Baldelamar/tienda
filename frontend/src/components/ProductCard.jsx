import "./ProductCard.css";

export default function ProductCard({ product, onBuy }) {
  return (
    <div className="card product-card text-center">
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top product-img mx-auto d-block"
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text description">{product.description}</p>
        <p className="price">${product.price} MXN</p>
        <button className="btn btn-primary" onClick={() => onBuy(product)}>
          Comprar
        </button>
      </div>
    </div>
  );
}
