import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import ShoppingStore from "./redux/shopping_product/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ShoppingStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
