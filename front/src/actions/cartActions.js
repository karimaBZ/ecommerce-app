/* eslint-disable no-lone-blocks */
import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = (items||[]).slice();
  let productAlreadyInCart = false;

  cartItems.forEach((item) => {
    if (item.id === product.id) {
      item.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  return dispatch({
    type: ADD_TO_CART,
    payload: {
      cartItems,
    },
  });
};

export const removeFromCart = (items, item) => (dispatch) => {
  const cartItems = items.slice().filter((a) => a.id !== item.id);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  return dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  });
};

export const removeAllFromCart = () => (dispatch) => {
  const cartItems = [];
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  return dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems: [] },
  });
};
