import { combineReducers } from 'redux';

import { userReducer } from './reducers/user/user.reducer';
import { categoriesReducer } from './reducers/categories/category.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});