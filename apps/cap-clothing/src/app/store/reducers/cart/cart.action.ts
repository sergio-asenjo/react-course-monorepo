import { AnyAction } from "redux";
import { ICartItem } from "../../../interfaces/ICartItem";

export const setIsCartOpen = (isCartOpen: boolean): AnyAction => {
  return ({ type: 'SET_IS_CART_OPEN', payload: isCartOpen });
};

export const addItemToCart = (cartItems: ICartItem[], item: ICartItem) => {
  const newCartItems = addCartItem(cartItems, item);
  return {
    type: 'SET_CART_ITEMS',
    payload: newCartItems,
  };
};

export const reduceItemFromCart = (cartItems: ICartItem[], item: ICartItem) => {
  const newCartItems = reduceCartItem(cartItems, item);
  return {
    type: 'SET_CART_ITEMS',
    payload: newCartItems,
  };
};

export const removeItemFromCart = (cartItems: ICartItem[], item: ICartItem) => {
  const newCartItems = removeCartItem(cartItems, item);
  return {
    type: 'SET_CART_ITEMS',
    payload: newCartItems,
  };
};

function addCartItem(
  cartItems: ICartItem[],
  cartItemToAdd: ICartItem
): ICartItem[] {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity! + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

function reduceCartItem(
  cartItems: ICartItem[],
  cartItemToReduce: ICartItem
): ICartItem[] {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToReduce.id
  );

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToReduce.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToReduce.id
      ? { ...cartItem, quantity: cartItem.quantity! - 1 }
      : cartItem
  );
}

function removeCartItem(
  cartItems: ICartItem[],
  cartItemToRemove: ICartItem
): ICartItem[] {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
}
