import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

import './input.styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type: 'text' | 'textarea';
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input: FC<InputProps> = ({
  type, label, onChange, ...otherProps
}: InputProps) => {
  return (
    <div className="input-container flex col">
      <label className="label" htmlFor={label}>{label}</label>
      {type === 'text' ? (
        <input className="input" type="text" id={label} onChange={onChange} {...otherProps} />
      ) : (
        <textarea className="textarea" id={label} onChange={onChange} {...otherProps} />
      )}
    </div>
  );
};

export default Input;