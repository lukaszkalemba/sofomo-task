import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ type, onClick, className, children }) => (
  <button
    type={type}
    onClick={onClick}
    className={`text-sm font-semibold text-white bg-green-700 px-6 h-9 rounded-md ${className}`}
  >
    {children}
  </button>
);

export default Button;
