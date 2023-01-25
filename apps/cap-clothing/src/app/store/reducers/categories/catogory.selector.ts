import { AppState } from './../../app-state.interface';

export const selectCategoriesMap = (state: AppState) =>
  state.categories.categoriesMap.reduce((accumulator, category) => {
    const { title, items } = category;
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {} as { [key: string]: any[] });