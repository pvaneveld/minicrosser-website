import React, { ReactNode } from 'react';
import style from './Button.module.css';

export interface ButtonProps {
  type?: 'secondary' | 'cta' | 'secondary-dark';
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

const Button: React.SFC<ButtonProps> = props => {
  const { clickHandler, children } = props;
  return (
    <button
      className={`${style.button} ${props.type && props.type === 'secondary' ? style.secondary : ''} ${
        props.type && props.type === 'cta' ? style.cta : ''
      } ${!props.type ? style.primary : ''} ${props.type === 'secondary-dark' ? style.secondaryDark : ''}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
