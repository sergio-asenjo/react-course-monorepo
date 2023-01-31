import { ICategory } from './../interfaces/ICategory';
import { User } from 'firebase/auth';

export interface AppState {
  user: {
    currentUser: User | null;
  },
  categories: {
    categoriesMap: ICategory[];
  },
  
}