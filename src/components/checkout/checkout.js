import React from "react";
import { useSelector } from "react-redux";
import { getCartProducts } from "../../redux/cart/selector";
import CartItem from "../cart/cartItem/cartItem";
import "./checkout.css";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Checkout() {
  const cartList = useSelector(getCartProducts);

  const stripe = useStripe();
  const Elements = useElements();

  const handleSubmit = (e) => {};

  const handleCHange = (e) => {};

  return (
    <div className="payment">
      <div className="paymentContainer">
        <h1></h1>

        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Delivery Address</h3>
          </div>
          <div className="paymentAddress">
            <p>Pop@gmail.com</p>
            <p>333 SW 7th Street</p>
            <p>Corvallis, Oregon</p>
          </div>
        </div>
      </div>
      <div className="paymentSection">
        <div className="paymentTitle">
          <h3>Review items and delivery</h3>
        </div>

        <div className="paymentItems">
          {cartList.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              id={cartItem.id}
              name={cartItem.name}
              image={cartItem.image}
              price={cartItem.price}
              quantity={cartItem.quantity}
              rating={cartItem.rating}
            />
          ))}
        </div>
      </div>

      <div className="paymentSection">
        <div className="paymentTitle">
          <h3>Payment method</h3>
        </div>

        <div className="paymentDetails">
          <form>
            <CardElement />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
