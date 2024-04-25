import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "./App";

const ProductDetail = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams(); // It fetches product ID from the URL

  const product = products.find((item) => item.id === Number(id));

  return (
    <div>
      <h2>Product Details</h2>
      {product ? (
        <div>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <p>{product.details}</p>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
      <button onClick={() => window.history.back()}>Go Back</button>
      {/* This will navigate to your previous page */}
    </div>
  );
};

export default ProductDetail;
