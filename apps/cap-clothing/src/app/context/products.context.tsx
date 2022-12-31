import { createContext, ReactNode, useState } from "react";
import { IProduct } from "../interfaces/IProduct"
import PRODUCTS from "../data/shop-data.json";

export const ProductsContext = createContext({
  products: [] as IProduct[],
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};