import React from 'react';
import style from './FormInput.module.css';
import { Ref } from 'react-hook-form/dist/types';
import { useFormContext } from 'react-hook-form';

interface InputProps {
  type: 'text' | 'email' | 'tel';
  id: string;
  label: string;
  register?: Ref;
  name: string;
  error?: boolean;
  errorMessage?: string;
}

const Input: React.SFC<InputProps> = props => {
  const { id, type, label, name, errorMessage } = props;
  const { register, errors } = useFormContext();

  return (
    <div>
      <label htmlFor={id}>
        <span className={style.label}>{label}</span>
        <input name={name} id={id} type={type} className={style.input} ref={register} />
      </label>
      {errorMessage && <span className={`${style.error} ${errors[name] ? style.showError : ''}`}>{errorMessage}</span>}
    </div>
  );
};

export default React.memo(Input);
