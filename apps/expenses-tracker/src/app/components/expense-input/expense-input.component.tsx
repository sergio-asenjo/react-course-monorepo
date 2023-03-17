import { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../store/expense/expense-slice";

import "./expense-input.styles.scss";

export const ExpenseInput: FC<{}> = () => {
  const dispatch = useDispatch();
  const [ price, setPrice ] = useState(0);
  const [ name, setName ] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addExpense({ name, price }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="expense-container flex col">
        <div className="flex col">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            name="price"
            onChange={(e) => setPrice(+e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseInput;