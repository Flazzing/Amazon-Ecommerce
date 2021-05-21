import React from "react";
import "./cartItem.css";
import { useDispatch } from "react-redux";
import { removeCartitem } from "../../../redux/cart/action";

function CartItem({ id, name, image, price, quantity, rating }) {
  const dispatch = useDispatch();

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
        <p className="cartItem_price">
          <small>Total Quantity: </small>
          <strong>{quantity}</strong>
        </p>
        <div className="cartItem_rating">
          {Array(parseInt(rating))
            .fill()
            .map(() => (
              <p key={i++}>⭐</p>
            ))}
        </div>
        <button
          onClick={() => {
            const removeItem = removeCartitem(id, quantity);
            dispatch(removeItem);
          }}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CartItem;
