import { ChangeEvent, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIncome, setIncome } from "../../store/expense/expense-slice";

import "./income-input.styles.scss";

export const IncomeInput: FC<{}> = () => {
  const dispatch = useDispatch();
  const income = useSelector(selectIncome);

  const updateIncome = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setIncome(parseInt(value || "0")));
  }

  return (
    <div className="flex row income">
      <label className="label">Income: </label>
      <input
        type="number"
        defaultValue={income}
        onChange={updateIncome}
        className="input"
        placeholder="Ex: 3000"
        
      />
    </div>
  );
};

export default IncomeInput;