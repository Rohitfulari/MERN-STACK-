import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import Menu from "./Pages/Menu";
import Login from "./Pages/Login";

import CartAction from "./Component/Action/CartAction";
import { useState } from "react";
import Admin from "./Pages/Admin/Admin";
import NewOrder from "./Pages/Admin/NewOrder";
import Dishlisst from "./Pages/Admin/Dishlisst";


function App() {
  const [cart,setCart] = useState([]);
  return (

    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartAction cart={cart}/>} />
        <Route path="/admin" element={<Admin></Admin>}/>
        <Route path="/newOrder" element={<NewOrder/>}/>
        <Route path="/dishList" element={<Dishlisst/>}/>
        
        
        
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
