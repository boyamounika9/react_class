import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
return (
<> <h1>Dashboard</h1>


  <Link to="movies">
    <button>Movies</button>
  </Link>

  <Outlet />
</>


);
}

export default Dashboard;
