import { FC } from 'react';

import './field-error.styles.scss';

interface FieldErrorProps {
  error: string;
}

const FieldError: FC<FieldErrorProps> = ({ error }) => {
  return (
    <div className="field-error">
      <span className="field-error__text">{error}</span>
    </div>
  )
}

export default FieldError;