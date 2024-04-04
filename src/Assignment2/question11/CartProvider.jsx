import React, { createContext, useState } from "react";
import DisplayProducts from "./DisplayProducts";
import Cart from "./Cart";
export const ProductContext = createContext();
const products = [
  { name: "Jeans 👖", price: 2000 },
  { name: "Iphone14 📱", price: 75300 },
  { name: "Shoes 👟", price: 3000 },
];
export default function CartProvider() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <ProductContext.Provider value={{ products, cart, setCart }}>
        <Cart />
        <DisplayProducts />
      </ProductContext.Provider>
    </div>
  );
}
