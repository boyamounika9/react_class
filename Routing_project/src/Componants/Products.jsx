import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
const [products, setProducts] = useState([]);

const navigate = useNavigate();

useEffect(() => {
fetch("https://dummyjson.com/products")
.then((res) => res.json())
.then((data) => setProducts(data.products));
}, []);

return ( <div className="products-container"> <h1>Our Products</h1>


  <div className="product-list">
    {products.map((product) => (
      <div className="product-card" key={product.id}>
        <img src={product.thumbnail} alt={product.title} />

        <h3>{product.title}</h3>

        <p>${product.price}</p>

        <button
          onClick={() => navigate(`/products/${product.id}`)}
        >
          View Details
        </button>
      </div>
    ))}
  </div>
</div>


);
}

export default Products;
