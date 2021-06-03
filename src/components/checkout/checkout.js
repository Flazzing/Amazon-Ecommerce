import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getCartProducts } from "../../redux/cart/selector";
import CartItem from "../cart/cartItem/cartItem";
import "./checkout.css";
import CurrencyFormat from "react-currency-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Server from "./stripe/axios/server";
import { useHistory } from "react-router-dom";

function Checkout() {
  const cartList = useSelector(getCartProducts);
  const history = useHistory();
  const [succeded, setSucceded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      var totalPrice = 0;
      cartList.forEach((cartItem) => {
        totalPrice += parseFloat(cartItem.price) * parseInt(cartItem.quantity);
      });
      const response = await Server({
        method: "post",
        url: `/payments/create?total=${totalPrice * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cartList]);

  var totalPrice = 0;
  cartList.forEach((cartItem) => {
    totalPrice += parseFloat(cartItem.price) * parseInt(cartItem.quantity);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntend }) => {
        setSucceded(true);
        setError(null);
        setProcessing(false);
        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

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
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="paymentPriceContainer">
              <CurrencyFormat
                renderText={(value) => (
                  <div>
                    <p>
                      Subtotal ({cartList.length} items):
                      {`${value}`}
                    </p>
                    <small className="subtotal_gift">
                      <input type="checkbox" /> this order contains a gift
                    </small>
                  </div>
                )}
                decimalScale={2}
                value={totalPrice.toFixed(2)}
                displayType={"text"}
                thousandseparator={true}
                prefix={"$"}
              />
              <button disabled={processing || disabled || succeded}>
                <span>{processing ? <p>Processing</p> : "Buy now"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
