import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./header";
import { BrowserRouter, Routes, Route } from "react-router";
import ProductPage from "./ProductPage";
import Home from "./home";
import Category from "./category";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/category/:slug" element={<Category />} />
      <Route path="/" element={<Home />} />
    </Routes>
    <footer className="footer">© MyShop — Categories &amp; Products</footer>
  </BrowserRouter>,
);
