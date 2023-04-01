import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import './button.styles.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'primary' | 'secondary';
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children?: ReactNode;
}
 
export const Button: FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  const color = props.color;
  const type = props.type;
  const onClick = props.onClick;
  const isDisabled = props.disabled;

  return (
    <button
      onClick={onClick}
      className={`
        button ${isDisabled ? ' button--disabled' : color}`
      }
      type={type}
    >
      {children}
    </button>
  );
}
 
export default Button;