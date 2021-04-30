import React from "react";
import CurrencyFormat from "react-currency-format";
import "./subtotal.css";

function subtotal() {
  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal (0 items): <string>{`${value}`}</string>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> this order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandseparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}
export default subtotal;
