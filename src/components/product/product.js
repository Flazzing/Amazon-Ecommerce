/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";
import "./product.css";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/action";

function Product({ id, name, image, price, rating, inStock }) {
  const dispatch = useDispatch();

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

      <button
        className="product_purchase_button"
        onClick={() => {
          const item = {
            id: id,
            name: name,
            image: image,
            rating: rating,
            inStock: inStock,
          };
          const cartProducts = addToCart(item, 1);
          dispatch(cartProducts);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
