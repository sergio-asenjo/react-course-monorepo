import { FC } from "react";

import "./expense-total.styles.scss";

export interface ExpenseTotalProps {
  total: number;
  remaining: number;
};

export const ExpenseTotal: FC<ExpenseTotalProps> = ({ total, remaining }) => {
  return (
    <div>
      <div className="row">
        <div className="col label">Total expenses</div>
        <div className="col amount">{total}</div>
      </div>
      <div className="row">
        <div className="col label">Remaining money</div>
        <div className="col amount">{remaining}</div>
      </div>
    </div>
  );
};

export default ExpenseTotal;