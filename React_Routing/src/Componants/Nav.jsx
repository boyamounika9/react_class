import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <h2>MovieZone</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
       
      </div>
    </nav>
  );
}

export default Nav;