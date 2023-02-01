import { ICategory } from './../interfaces/ICategory';
import { User } from 'firebase/auth';
import { ICartItem } from '../interfaces/ICartItem';

export interface AppState {
  user: {
    currentUser: User | null;
  },
  categories: {
    categoriesMap: ICategory[];
  },
  cart: {
    cartItems: ICartItem[];
    isCartOpen: boolean;
  },
}