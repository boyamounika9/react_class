
import Home from "./Componants/Home";
import About from "./Componants/About";
import Login from "./Componants/Login";
import Resister from "./Componants/Resister";
import Nav from "./Componants/Nav";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dshboard from "./Componants/Dshboard";
import Profile from "./Componants/Profile";
import Products from "./Componants/Products";
import Productdetails from "./Componants/Productdetails";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="dashboard" element={<Dshboard />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="product" element={<Products />}>
          <Route path="productdetails/:id" element={<Productdetails />}>
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Resister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

