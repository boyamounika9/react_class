import { Routes, Route } from "react-router-dom";

import Nav from "./Componants/Nav.jsx";
import Home from "./Componants/Home.jsx";
import Dashboard from "./Componants/Dashboard.jsx";
import Movies from "./Componants/Movies.jsx";
import Movieslist from "./Componants/Movieslist.jsx";

function App() {
return (
<> <Nav />

  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/dashboard" element={<Dashboard />}>
      <Route path="movies" element={<Movies />}>
        <Route path="movieslist" element={<Movieslist />} />
      </Route>
    </Route>
  </Routes>
</>


);
}

export default App;
