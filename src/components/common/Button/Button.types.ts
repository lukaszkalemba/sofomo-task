export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className: string;
}
