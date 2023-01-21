import { AnyAction } from 'redux';
import { ICategory } from './../../../interfaces/ICategory';

export const setCategoriesMap = (categories: ICategory): AnyAction => {
  return ({ type: 'SET_CATEGORIES_MAP', payload: categories });
};