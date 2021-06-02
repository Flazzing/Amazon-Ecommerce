import Header from "./components/header/app";
import Home from "./components/home/home";
import Cart from "./components/cart/cart";
import Checkout from "./components/checkout/checkout";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51IxnhtE88LGtjUOWXFdr9mJRfrLLw93RQPcMQl0lNHrs9cJ87bGkX8tTqw03hDFJIdPOuVJGisYX30d89yhFfvKw00De58QHfR"
);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart">
          <Header />
          <Cart />
        </Route>
        <Route path="/checkout">
          <Header />
          <Elements stripe={promise}>
            <Checkout />
          </Elements>
        </Route>

        <Route path="/">
          <Header /> <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
