import React from 'react';
import style from './FormInput.module.css';
import { Ref } from 'react-hook-form/dist/types';

interface InputProps {
  type: 'text' | 'email' | 'tel';
  id: string;
  label: string;
  register: Ref;
  name: string;
  error?: boolean;
  errorMessage?: string;
}

const Input: React.SFC<InputProps> = props => {
  const { id, type, label, name, register, error, errorMessage } = props;
  return (
    <>
      <label htmlFor={id}>
        <span className={style.label}>{label}</span>
        <input name={name} id={id} type={type} className={style.input} ref={register} />
        {errorMessage && <span className={`${style.error} ${error ? style.showError : ''}`}>{errorMessage}</span>}
      </label>
    </>
  );
};

export default React.memo(Input);
