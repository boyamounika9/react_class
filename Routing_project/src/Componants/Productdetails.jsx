import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Productdetails() {
const { id } = useParams();
const navigate = useNavigate();

const [product, setProduct] = useState({});

useEffect(() => {
fetch(`https://dummyjson.com/products/${id}`)
.then((res) => res.json())
.then((data) => setProduct(data));
}, [id]);

return ( <div className="product-details"> <img src={product.thumbnail} alt={product.title} />

  <h1>{product.title}</h1>

  <h2>${product.price}</h2>

  <p>{product.description}</p>

  <p>Category: {product.category}</p>

  <p>Rating: ⭐ {product.rating}</p>

  <p>Available Stock: {product.stock}</p>

  <button onClick={() => navigate("/products")}>
    Back to Products
  </button>
</div>


);
}

export default Productdetails;
