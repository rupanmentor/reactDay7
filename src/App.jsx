import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import PageNotFound from "./Pages/PageNotFound";
import ProductDetail from "./Pages/ProductDetail";
import Contact from "./Pages/Contact";
import Help from "./Pages/Help";
import ReachOut from "./Pages/ReachOut";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/help" element={<Help />}>
              <Route path="reach" element={<ReachOut />} />
         </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
