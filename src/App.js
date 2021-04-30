/** @jsxImportSource @emotion/react */

import Header from "./components/header/app";
import Home from "./components/home/home";
import Cart from "./components/cart/cart";

import { css } from "@emotion/react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart">
          <Header />
          <Cart />
        </Route>
        <Route path="/">
          <Header /> <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
