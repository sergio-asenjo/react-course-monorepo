import { createContext, useState } from 'react';
import { ICartItem } from '../interfaces/ICartItem';

interface ICartContext {
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
  cartItems: ICartItem[];
  addItemToCart: (item: ICartItem) => void;
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
} as ICartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const addItemToCart = (item: ICartItem) => {
    setCartItems(addCartItem(cartItems, item));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

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