import { createContext, ReactNode, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { ICategory } from "../interfaces/ICategory";

export const CategoriesContext = createContext({
  categoriesMap: {} as ICategory,
});

export const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    console.info("ProductProvider useEffect");
    const getProducts = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }

    getProducts();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};