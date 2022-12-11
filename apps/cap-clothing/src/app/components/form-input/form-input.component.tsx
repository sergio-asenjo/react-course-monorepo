
import { InputHTMLAttributes } from 'react';
import './form-input.styles.scss';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  return (
    <div>
      <label htmlFor={otherProps.name} className="input-label">{label}</label>
      <input className="input" {...otherProps} />
    </div>
  )
}

export default FormInput;