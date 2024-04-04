import React from "react";
import { useContext } from "react";
import { ProductContext } from "./CartProvider";

export default function Cart() {
  const { cart, setCart } = useContext(ProductContext);
  const remove = (index) => {
    const array = [...cart];
    array.splice(index, 1);
    setCart([...array]);
  };
  return (
    <>
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
        }}
      >
        Cart:{cart.length}
      </h1>
      {cart.map((element, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <ul>
              <li>{element.name}</li>
              <p>{element.price}</p>
              <button onClick={() => remove(index)}>DELETE</button>
            </ul>
          </div>
        );
      })}
      <h2
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
        }}
      >
        Total:
      </h2>
      <h3
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
        }}
      >
        {cart.reduce((accum, element) => (accum += element.price), 0)}
      </h3>
    </>
  );
}
