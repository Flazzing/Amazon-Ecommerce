import React from "react";
import "./cart.css";

function cart() {
  return (
    <div className="cart">
      <div className="cart_left">
        <img
          className="cart_advertisment"
          src="https://www.intelligencenode.com/blog/wp-content/uploads/2019/06/Prime-day.jpg"
          alt=""
        />

        <div>
          <h2 className="cart_title">Shopping Cart</h2>
        </div>
      </div>

      <div className="cart_right">
        <h2 className="cart_price_total">Total price: </h2>
      </div>
    </div>
  );
}

export default cart;
