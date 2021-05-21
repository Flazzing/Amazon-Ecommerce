import React from "react";
import { useSelector } from "react-redux";
import { getCartProducts } from "../../redux/cart/selector";
import CartItem from "../cart/cartItem/cartItem";
import "./payment.css";

function Payment() {
  const cartList = useSelector(getCartProducts);

  return (
    <div className="payment">
      <div className="paymentContainer">
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

        <div className="paymentDetails"></div>
      </div>
    </div>
  );
}

export default Payment;
