import { FC } from "react";

import "./income-input.styles.scss";

export interface IncomeInputProps {
  income: number;
};

export const IncomeInput: FC<IncomeInputProps> = ({ income }) => {
  return (
    <div className="row justify-content-center mb-2">
      <div className="col-6 label">Income</div>
      <div className="col-6">
        <input type="number" className="form-control" placeholder="Ex: 3000" />
      </div>
    </div>
  );
};

export default IncomeInput;