import { ButtonHTMLAttributes, ReactNode } from 'react';

import './button.styles.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading?: boolean;
  buttonType: 'normal' | 'inverted' | 'google';
  children?: ReactNode;
}

const Button = ({ label, isLoading = false, buttonType, children, ...otherProps }: ButtonProps) => {
  return (
    <button className={`button button--${buttonType} flex-row`}  {...otherProps}>
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : label}
      {children}
    </button>
  );
};

export default Button;