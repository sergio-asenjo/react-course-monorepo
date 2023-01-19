import { createContext, ReactNode, useReducer } from 'react';
import { ICartItem } from '../interfaces/ICartItem';

interface ICartContext {
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
  cartItems: ICartItem[];
  addItemToCart: (item: ICartItem) => void;
  reduceItemFromCart: (item: ICartItem) => void;
  cartCount: number;
  removeItemFromCart: (item: ICartItem) => void;
  cartTotal: number;
}

interface CartState {
  isCartOpen: boolean;
  cartItems: ICartItem[];
  cartCount: number;
  cartTotal: number;
}

interface CartAction {
  type: 'SET_CART_ITEMS' | 'SET_IS_CART_OPEN';
  payload: {
    cartItems?: ICartItem[];
    cartCount?: number;
    cartTotal?: number;
    isCartOpen?: boolean;
  };
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [] as ICartItem[],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state: CartState, action: CartAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CART_ITEMS':
      return {
        ...state,
        ...payload,
      };
    case 'SET_IS_CART_OPEN':
      return {
        ...state,
        isCartOpen: payload.isCartOpen!,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  reduceItemFromCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  cartTotal: 0,
} as ICartContext);

export const CartProvider = ({ children }: { children:  ReactNode }) => {
  const [{ 
    cartItems,
    cartCount,
    cartTotal,
    isCartOpen,
  }, dispatch] = useReducer(cartReducer, INITIAL_STATE);


  const updateCartItemsReducer = (cartItems: ICartItem[]) => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity!,
      0
    );
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity! * cartItem.price,
      0
    );

    dispatch({
      type: 'SET_CART_ITEMS',
      payload: {
        cartItems: cartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const addItemToCart = (item: ICartItem) => {
    const newCartItems = addCartItem(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };

  const reduceItemFromCart = (item: ICartItem) => {
    const newCartItems = reduceCartItem(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (item: ICartItem) => {
    const newCartItems = removeCartItem(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (value: boolean) => {
    dispatch({
      type: 'SET_IS_CART_OPEN',
      payload: {
        isCartOpen: value,
      },
    });
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    reduceItemFromCart,
    removeItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
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
