/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";
import "./product.css";

function Product({ id, name, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_name">
        <p>{name}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button className="product_purchase_button">Add to cart</button>
    </div>
  );
}

export default Product;
