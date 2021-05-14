import { shop_productsReducer } from "./shopping_product/reducer";
import { cartReducer } from "./cart/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  shop_productList: shop_productsReducer,
  cart_productList: cartReducer,
});

export default rootReducer;
