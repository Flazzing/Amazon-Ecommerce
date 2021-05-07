import { combineReducers } from "redux";
import { RECEIVE_PRODUCTS, UPDATE_PRODUCTS } from "./action";

function cartReducer(state = [], action) {
  switch (action.type) {
    case `ADD_TO_CART`:
      console.log(reducer);

      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cart_productList: cartReducer,
});

export default rootReducer;
