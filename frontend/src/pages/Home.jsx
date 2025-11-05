import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Llamada al backend NestJS
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error al obtener productos:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Título principal */}
      <h1 className="text-3xl font-semibold text-center mb-10 text-gray-800">
        Tienda de Electrónicos
      </h1>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-5 flex flex-col items-center transition-transform hover:scale-105"
          >
            <img
              src={`http://localhost:3000/public/${product.image}`}
              alt={product.name}
              className="w-48 h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 text-center">
              {product.name}
            </h2>
            <p className="text-gray-500 mt-1 mb-3">${product.price} MXN</p>
            <button
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={() => (window.location.href = "/checkout")}
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
