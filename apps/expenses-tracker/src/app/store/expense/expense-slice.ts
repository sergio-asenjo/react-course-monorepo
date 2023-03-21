import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Expense {
  name: string;
  price: number;
}

interface ExpenseState {
  income: number;
  expensesList: Expense[];
}

const initialState: ExpenseState = {
  income: 0,
  expensesList: [],
};

export const expenseSlice = createSlice({
  name: 'expenseSlice',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<{ name: string; price: number }>) => {
      state.expensesList.push(action.payload);
    },
    setIncome: (state, action: PayloadAction<number>) => {
      state.income = action.payload;
    },
  },
});

export const { addExpense, setIncome } = expenseSlice.actions;
export const selectExpensesList = (state: RootState) => state.expense.expensesList;
export const selectIncome = (state: RootState) => state.expense.income;
export default expenseSlice.reducer;