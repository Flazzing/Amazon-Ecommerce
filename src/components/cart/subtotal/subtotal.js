import React from "react";
import CurrencyFormat from "react-currency-format";
import "./subtotal.css";
import { useSelector } from "react-redux";
import { getCartProducts } from "../../../redux/cart/selector";
import { useHistory } from "react-router";

function Subtotal() {
  const cartList = useSelector(getCartProducts);
  const history = useHistory();

  var totalPrice = 0;
  cartList.forEach((cartItem) => {
    totalPrice += parseFloat(cartItem.price) * parseInt(cartItem.quantity);
  });

  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({cartList.length} items): <string>{`${value}`}</string>
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
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}
export default Subtotal;
