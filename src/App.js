import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Nav from './Pages/nav'; // Ensure that the path is correct
import Home from './Pages/home';
import About from './Pages/about';
import News from './Pages/news';
import Eshop from './Pages/eshop';
import ProductSell from './Pages/productSell';
import Main from './Pages/main';
import WasteDisposalForm from './Pages/dispose'; // Ensure that the path is correct
import LoginSignup from "./Pages/login-signup";
import Sell from "./Pages/productSell";
import Cart from "./Pages/cart";
import Admin from "./Pages/admin-login";

function App(){
  return(
    <div>
      <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/news" element={<News/>}></Route>
      <Route path="/productSell" element={<ProductSell/>}></Route>
      <Route path="/disposal" element={<WasteDisposalForm/>}></Route>
      <Route path="/loginSignup" element={<LoginSignup/>}></Route>
      <Route path="/main" element={<Main/>}></Route>
      <Route path="/eshop" element={<Eshop/>}></Route>
      <Route path="/sell" element={<Sell/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/adminLogin" element={<Admin/>}></Route>

      </Routes>
      </BrowserRouter>
     
      
    </div>
  )

}

export default App;