import { Routes, Route } from "react-router-dom";

import Nav from "./Componants/Nav.jsx";
import Home from "./Componants/Home.jsx";
import Products from "./Componants/Products.jsx";
import Productdetails from "./Componants/Productdetails.jsx";
import Contact from "./Componants/Contact.jsx";

function App() {
return (
<> <Nav />


  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products/:id" element={<Productdetails />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</>


);
}

export default App;
