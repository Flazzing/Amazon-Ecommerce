export const ADD_PRODUCTS_TO_SHOP = "ADD_PRODUCTS_TO_SHOP";

/**
 * RECEIVE_PRODUCTS action
 * {
 *   type: RECEIVE_PRODUCTS,
 *   id - A unique product ID
 *   name - The name of the product
 *   description - The description of the product
 *   price - The price-per-unit of the product
 *   inStock - The number of units of the product the store has in stock
 *   photoUrl - A URL for an image of the product
 * }
 */

export function addProducts_shop(products) {
  return {
    type: ADD_PRODUCTS_TO_SHOP,
    products,
  };
}
