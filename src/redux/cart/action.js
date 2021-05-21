export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export function createCartItem(id, name, image, price, rating, quantity) {
  return {
    id: id,
    name: name,
    image: image,
    price: price,
    rating: rating,
    quantity: quantity,
  };
}

/**
 * ADD TO CART actions
 *{
 *  type: ADD_TO_CART
 *  id: Unique ID of the product
 *  name: Name of the Product
 *  image: URL link to images
 *  rating: rating
 *  price: The price for individual
 *  quantity: The quantity of item being purchase
 *  availableUnit: The total amount of unit available
 *
 *}
 */

export function addToCart(product, itemOrderQuantity) {
  product.itemOrderQuantity = itemOrderQuantity;

  // update current available unit of the product
  product.availableUnit = product.availableUnit - itemOrderQuantity;

  return {
    type: ADD_TO_CART,
    product,
  };
}

export function removeCartitem(id, deleteQuantity) {
  return {
    type: REMOVE_CART_ITEM,
    id,
    deleteQuantity,
  };
}
