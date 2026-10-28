
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav class="navbar">
      <h2>My Website</h2>

      <div class="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/help">Help</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>


      </div>
      <div class="btn">
        <button><Link to="/login">Login</Link></button>
        <button> <Link to="/register">Register</Link></button>
      </div>
    </nav>
  );
}

export default Nav;

