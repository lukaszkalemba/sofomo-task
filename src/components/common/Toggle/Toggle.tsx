import { ToggleProps } from './Toggle.types';

const Toggle = ({ label, toggle, className }: ToggleProps) => {
  return (
    <label className={`toggle flex justify-center items-center ${className}`}>
      <span className='mr-4'>{label}</span>

      <div>
        <input className='toggle-input' type='checkbox' onClick={toggle} />
        <div className='toggle-fill'></div>
      </div>
    </label>
  );
};

export default Toggle;
