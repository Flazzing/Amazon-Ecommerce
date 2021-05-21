import { combineReducers } from "redux";
import { RECEIVE_PRODUCTS, UPDATE_PRODUCTS } from "./action";

export function cartReducer(state = [], action) {
  let isDuplicate = false;
  console.log(action);
  switch (action.type) {
    case `ADD_TO_CART`:
      state.forEach((cartItem) => {
        if (cartItem.id.localeCompare(action.product.id) === 0) {
          cartItem.quantity =
            parseInt(cartItem.quantity) +
            parseInt(action.product.itemOrderQuantity);
          isDuplicate = true;
        }
      });

      if (isDuplicate === true) {
        return [...state];
      }
      if (isDuplicate === false) {
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
      }

    case `REMOVE_CART_ITEM`:
      state.forEach((cartItem) => {
        if (cartItem.id.localeCompare(action.id) === 0) {
          cartItem.quantity =
            parseInt(cartItem.quantity) - parseInt(action.deleteQuantity);
          if (cartItem.quantity < 0) {
            cartItem.quantity = 0;
          }
          if (cartItem.quantity == 0) {
            const index = state.findIndex((x) => x.id === action.id);
            if (index !== undefined) state.splice(index, 1);
          }
        }
      });
      return [...state];

    default:
      return state;
  }
}
