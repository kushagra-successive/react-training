import React from "react";
import { useContext } from "react";
import { ProductContext } from "./CartProvider";
import styles from "../assignment.module.css";
const Cart = () => {
  const { cart, setCart } = useContext(ProductContext);
  const remove = (index) => {
    const array = [...cart];
    array.splice(index, 1);
    setCart([...array]);
  };
  return (
    <>
      <h1 className={styles.cart}>Cart:{cart.length}</h1>
      {cart.map((element, index) => {
        return (
          <div key={index} className={styles.cart}>
            <ul>
              <li>{element.name}</li>
              <p>{element.price}</p>
              <button onClick={() => remove(index)}>DELETE</button>
            </ul>
          </div>
        );
      })}
      <h2 className={styles.cart}>Total:</h2>
      <h3 className={styles.cart}>
        {cart.reduce((accum, element) => (accum += element.price), 0)}
      </h3>
    </>
  );
};
export default Cart;
