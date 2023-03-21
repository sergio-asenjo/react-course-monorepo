import { FC } from "react";
import { useSelector } from "react-redux";
import { selectExpensesList, selectIncome } from "../../store/expense/expense-slice";
import { formatNumber } from "../../utils/numbers.utils";

import "./expense-total.styles.scss";

export const ExpenseTotal: FC<{}> = () => {
  const expenseList = useSelector(selectExpensesList);
  const income = useSelector(selectIncome);
  
  const total = expenseList.reduce((acc, curr) => acc + curr.price, 0);
  const remaining = income - total;

  return (
    <div className="flex col total-container">
      <div className="flex row expenses">
        <div className="col label">Total expenses</div>
        <div className="col amount">{formatNumber(total)}</div>
      </div>
      <hr />
      <div className="flex row remaining">
        <div className="col label">Remaining money</div>
        <div className="col amount">{formatNumber(remaining)}</div>
      </div>
    </div>
  );
};

export default ExpenseTotal;