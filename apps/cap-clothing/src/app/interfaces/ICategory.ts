import { IProduct } from './IProduct';

export interface ICategory {
  items: IProduct[];
  title: string;
}