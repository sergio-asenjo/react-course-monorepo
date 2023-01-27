import { createSelector } from 'reselect';
import { AppState } from './../../app-state.interface';

const selectCategoryReducer = (state: AppState) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesMap
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((accumulator, category) => {
    const { title, items } = category;
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {} as { [key: string]: any[] })
);