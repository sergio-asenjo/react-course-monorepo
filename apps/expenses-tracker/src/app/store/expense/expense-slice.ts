import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Expense {
  name: string;
  price: number;
}

interface ExpenseState {
  expensesList: Expense[];
}

const initialState: ExpenseState = {
  expensesList: [
    {
      name: 'Apple',
      price: 1.5,
    },
    {
      name: 'Orange',
      price: 1.2,
    },
  ],
};

export const expenseSlice = createSlice({
  name: 'expenseSlice',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<{ name: string; price: number }>) => {
      state.expensesList.push(action.payload);
    },
  },
});

export const { addExpense } = expenseSlice.actions;
export const selectExpenseList = (state: RootState) => state.expense.expensesList;
export default expenseSlice.reducer;