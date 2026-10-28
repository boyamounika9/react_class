import React from "react";
import { Link, Outlet } from "react-router-dom";

function Movies() {
return (
<> <h2>Movies Page</h2>


  <Link to="movieslist">
    <button>Movies List</button>
  </Link>

  <Outlet />
</>


);
}

export default Movies;
