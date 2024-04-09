import { ProductContext } from "./CartProvider";
import { useContext } from "react";
import styles from "../assignment.module.css";
const DisplayProducts = () => {
  const { products, cart, setCart } = useContext(ProductContext);
  console.log(cart);
  return (
    <>
      <h1 className={styles.baseline}>Products</h1>
      {products.map((element, index) => {
        return (
          <div key={index} className={styles.baseline}>
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
};
export default DisplayProducts;
