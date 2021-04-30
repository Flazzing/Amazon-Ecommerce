import React from "react";
import "./cart.css";
import Subtotal from "./subtotal/subtotal";

function cart() {
  return (
    <div className="cart">
      <div className="cart_left">
        <img
          className="cart_advertisment"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492666_.jpg"
          alt=""
        />

        <div>
          <h2 className="cart_title">Shopping Cart</h2>
          {/*CartItem*/}
        </div>
      </div>

      <div className="cart_right">
        <Subtotal />
        <h2 className="cart_price_total">Total price: </h2>
      </div>
    </div>
  );
}

export default cart;
