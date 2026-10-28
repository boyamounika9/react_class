import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <h2>ShopZone</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Nav;