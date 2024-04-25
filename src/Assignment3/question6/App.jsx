import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import { createContext } from "react";
import { products } from "../data";

export const ProductContext = createContext();
function App() {
  return (
    <ProductContext.Provider value={{ products }}>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          {/* here id is working in dynamic routing*/}
        </Routes>
      </Router>
    </ProductContext.Provider>
  );
}

export default App;
