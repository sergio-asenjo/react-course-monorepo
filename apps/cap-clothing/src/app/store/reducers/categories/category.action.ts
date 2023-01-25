import { AnyAction } from 'redux';
import { ICategory } from './../../../interfaces/ICategory';

export const setCategoriesMap = (categoriesArray: ICategory[]): AnyAction => {
  return ({ type: 'SET_CATEGORIES', payload: categoriesArray });
};