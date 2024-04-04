import React from "react";
import { ProductContext } from "./CartProvider";
import { useContext } from "react";
export default function DisplayProducts() {
  const { products, cart, setCart } = useContext(ProductContext);
  console.log(cart);
  return (
    <>
      {" "}
      <h1>Products</h1>
      {products.map((element, index) => {
        return (
          <div key={index}>
            <ul>
              <li>{element.name}</li>
              <p>{element.price}</p>
              <button
                onClick={() => {
                  setCart([...cart, element]);
                }}
              >
                ADDTOCART
              </button>
            </ul>

          </div>
        );
      })}
    </>
  );
}
