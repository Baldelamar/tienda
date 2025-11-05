import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error al obtener productos:", err));
  }, []);

  const handleBuy = async (product) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/stripe/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const data = await res.json();
      window.location.href = data.url;
    } catch (err) {
      console.error("Error al crear sesión de pago:", err);
    }
  };

  
  return (
    <div className="home-container">
      <h1 className="home-title">Tienda de Electrónicos</h1>

      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="card product-card h-100 text-center">
                <img
                  src={`${import.meta.env.VITE_API_URL}/public/images/${product.image.split("/").pop()}`}
                  className="card-img-top mx-auto d-block product-img"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price} MXN</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleBuy(product)}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
