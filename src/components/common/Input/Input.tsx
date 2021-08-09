import { InputProps } from './Input.types';

const Input = ({
  type,
  label,
  value,
  placeholder,
  error,
  required = false,
  onChange,
}: InputProps) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      aria-label={label}
      required={required}
      className='h-9 w-80 bg-green-50 p-2 border-2 border-green-600 border-opacity-75 rounded-md'
    />

    <span className='w-80 absolute -bottom-5 text-sm text-red-600'>{error}</span>
  </>
);

export default Input;
