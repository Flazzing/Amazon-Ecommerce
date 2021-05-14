import React from "react";
import "./cartItem.css";

function CartItem({ id, name, image, price, rating }) {
  var i = 0;
  return (
    <div key={id} className="cartItem">
      <img className="cartItem_image" src={image} />
      <div className="cartItem_information">
        <p className="cartItem_title">{name}</p>
        <p className="cartItem_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="cartItem_rating">
          {Array(parseInt(rating))
            .fill()
            .map(() => (
              <p key={i++}>⭐</p>
            ))}
        </div>
        <button>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CartItem;
