import { configureStore } from '@reduxjs/toolkit';
import { expenseSlice } from './expense/expense-slice';

export interface RootState {
  expense: ReturnType<typeof expenseSlice.reducer>;
}

const store = configureStore({
  reducer: {
    expense: expenseSlice.reducer,
  },
});

export default store;