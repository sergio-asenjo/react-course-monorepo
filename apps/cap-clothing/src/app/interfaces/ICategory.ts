import { IProduct } from './IProduct';

export interface ICategory {
  [key: string]: IProduct[];
}