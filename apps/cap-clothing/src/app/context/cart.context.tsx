import { createContext, useState } from 'react';

interface ICartContext {
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
} as ICartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}