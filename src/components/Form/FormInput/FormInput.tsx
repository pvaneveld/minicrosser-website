import React from 'react';
import style from './FormInput.module.css';
import { useFormContext } from 'react-hook-form';

interface InputProps {
  type: 'text' | 'email' | 'tel';
  id: string;
  label: string;
  name: string;
  errorMessage?: string;
  regex?: RegExp;
  required: boolean;
}

const Input: React.SFC<InputProps> = props => {
  const { id, type, label, name, errorMessage, required, regex } = props;
  const { register, errors } = useFormContext();

  return (
    <div>
      <label htmlFor={id}>
        <span className={style.label}>{label}</span>
        <input
          name={name}
          id={id}
          type={type}
          className={style.input}
          ref={register({ required, pattern: regex || /.*/ })}
        />
      </label>
      {errorMessage && <span className={`${style.error} ${errors[name] ? style.showError : ''}`}>{errorMessage}</span>}
    </div>
  );
};

export default React.memo(Input);
