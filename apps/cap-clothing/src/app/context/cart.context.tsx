import { createContext, useState, useEffect } from 'react';
import { ICartItem } from '../interfaces/ICartItem';

interface ICartContext {
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
  cartItems: ICartItem[];
  addItemToCart: (item: ICartItem) => void;
  reduceItemFromCart: (item: ICartItem) => void;
  cartCount: number;
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  reduceItemFromCart: () => {},
  cartCount: 0,
} as ICartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity!, 0);
    setCartCount(cartCount);
  }, [cartItems]);

  const addItemToCart = (item: ICartItem) => {
    setCartItems(addCartItem(cartItems, item));
  };

  const reduceItemFromCart = (item: ICartItem) => {
    setCartItems(reduceCartItem(cartItems, item));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, reduceItemFromCart };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

function addCartItem(cartItems: ICartItem[], cartItemToAdd: ICartItem): ICartItem[] {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity! + 1 } : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

function reduceCartItem(cartItems: ICartItem[], cartItemToReduce: ICartItem): ICartItem[] {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToReduce.id);

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToReduce.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToReduce.id ? { ...cartItem, quantity: cartItem.quantity! - 1 } : cartItem
  );
}