import { AppState } from './../../app-state.interface';

export const selectCategoriesMap = (state: AppState) => state.categories.categoriesMap;