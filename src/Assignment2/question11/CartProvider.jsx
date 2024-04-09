import React, { createContext, useState } from "react";
import DisplayProducts from "./DisplayProducts";
import Cart from "./Cart";
import { products } from "../data";
export const ProductContext = createContext();

const CartProvider = () => {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <ProductContext.Provider value={{ products, cart, setCart }}>
        <Cart />
        <DisplayProducts />
      </ProductContext.Provider>
    </div>
  );
};
export default CartProvider;
