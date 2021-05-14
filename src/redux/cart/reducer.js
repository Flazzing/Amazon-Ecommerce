import { combineReducers } from "redux";
import { RECEIVE_PRODUCTS, UPDATE_PRODUCTS } from "./action";

export function cartReducer(state = [], action) {
  console.log(state);
  switch (action.type) {
    case `ADD_TO_CART`:
      return [
        {
          id: action.product.id,
          name: action.product.name,
          image: action.product.image,
          rating: action.product.rating,
          price: action.product.price,
          quantity: action.product.itemOrderQuantity,
          inStock: action.product.inStock,
        },

        ...state,
      ];

    default:
      return state;
  }
}
