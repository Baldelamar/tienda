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
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-semibold text-center mb-10 text-gray-800">
        Tienda de Electrónicos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-5 flex flex-col items-center transition-transform hover:scale-105"
          >
            <img
              src={`${import.meta.env.VITE_API_URL}/public/images/${product.image.split('/').pop()}`}
              alt={product.name}
              width="200"
            />
            <h2 className="text-lg font-semibold text-gray-800 text-center">
              {product.name}
            </h2>
            <p className="text-gray-500 mt-1 mb-3">${product.price} MXN</p>
            <button
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={() => handleBuy(product)}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
