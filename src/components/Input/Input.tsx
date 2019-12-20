import React from 'react';
import { ReactNode } from 'react';
import style from './Input.module.css';

interface InputProps {
  type: 'text | email | tel';
  id: string;
  label: string;
}

const Input: React.SFC<InputProps> = props => {
  const { id, type, label } = props;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </>
  );
};

export default Input;
