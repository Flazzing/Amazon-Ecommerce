import Header from "./components/header/app";
import Home from "./components/home/home";
import Cart from "./components/cart/cart";
import Payment from "./components/payment/payment";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart">
          <Header />
          <Cart />
        </Route>
        <Route path="/payment">
          <Header /> <Payment />
        </Route>

        <Route path="/">
          <Header /> <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
