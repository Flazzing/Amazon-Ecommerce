import { combineReducers } from "redux";
import { ADD_PRODUCTS_TO_SHOP } from "./action";

function shop_productsReducer(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCTS_TO_SHOP:
      return [
        {
          id: action.products.id,
          productName: action.products.name,
          price: action.products.price,
          inStock: action.products.inStock,
          photoUrl: action.products.photoUrl,
        },
        ...state,
      ];

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  shop_productList: shop_productsReducer,
});

export default rootReducer;
