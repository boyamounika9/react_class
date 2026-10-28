import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to ShopZone</h1>

      <p>Explore our products and discover amazing deals!</p>

      <button onClick={() => navigate("/products")}>
        View Products
      </button>

      <button onClick={() => navigate("/contact")}>
        Contact Us
      </button>
    </div>
  );
}

export default Home;