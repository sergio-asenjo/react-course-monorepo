import { ICategory } from '../../../interfaces/ICategory';

const CATEGORIES_INITIAL_STATE = {
  categoriesMap: [] as ICategory[],
};

interface CategoryActions {
  type: 'SET_CATEGORIES';
  payload: ICategory[];
}

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: CategoryActions
): typeof CATEGORIES_INITIAL_STATE => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CATEGORIES':
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      return state;
  }
};
