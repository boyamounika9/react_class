

import Nav from "./Componants/Nav.jsx";
import Home from "./Componants/Home.jsx";
import Dashboard from "./Componants/Dashboard.jsx";
import Movies from "./Componants/Movies.jsx";
import Movieslist from "./Componants/Movieslist.jsx";
import MovieContex from "./Componants/Context.jsx";

function App() {
   let movies = [
  { id: 1, name: "Pushpa 2", hero: "Allu Arjun" },
  { id: 2, name: "RRR", hero: "Ram Charan" },
  { id: 3, name: "Baahubali", hero: "Prabhas" },
  { id: 4, name: "Salaar", hero: "Prabhas" },
  { id: 5, name: "Devara", hero: "Jr. NTR" },
  { id: 6, name: "Kalki 2898 AD", hero: "Prabhas" },
  { id: 7, name: "Arjun Reddy", hero: "Vijay Deverakonda" },
  { id: 8, name: "Jersey", hero: "Nani" },
  { id: 9, name: "Magadheera", hero: "Ram Charan" },
  { id: 10, name: "Ala Vaikunthapurramuloo", hero: "Allu Arjun" }
];
return (
<> <Nav />

<MovieContex.Provider value={movies}>
  <Home/>
</MovieContex.Provider>

</>


);
}

export default App;
