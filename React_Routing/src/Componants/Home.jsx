import React from "react";
import { Link } from "react-router-dom";

function Home() {
return (
<> <h1>Welcome to MovieZone</h1>


  <Link to="/dashboard">
    <button>Dashboard</button>
  </Link>
</>


);
}

export default Home;
