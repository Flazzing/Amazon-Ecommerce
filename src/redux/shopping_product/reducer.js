import { ADD_PRODUCTS_TO_SHOP } from "./action";

export function shop_productsReducer(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCTS_TO_SHOP:
      return [
        {
          id: action.products.id,
          productName: action.products.name,
          price: action.products.price,
          rating: action.products.rating,
          inStock: action.products.inStock,
          photoUrl: action.products.photoUrl,
        },
        ...state,
      ];

    default:
      return state;
  }
}
