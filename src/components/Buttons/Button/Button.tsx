import React, { ReactNode } from 'react';
import style from './Button.module.css';
import { Link } from 'gatsby';

export interface ButtonProps {
  type?: 'secondary' | 'cta' | 'secondary-dark' | 'primary-dark';
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  link?: boolean;
  target?: string;
  submit?: boolean;
  classString?: string;
  disabled?: boolean;
}

const Button: React.SFC<ButtonProps> = props => {
  const { clickHandler, children, link, target, submit, classString, disabled } = props;
  const classNames = `${style.button} ${props.type && props.type === 'secondary' ? style.secondary : ''} ${
    props.type && props.type === 'cta' ? style.cta : ''
  } ${!props.type ? style.primary : ''} ${props.type === 'secondary-dark' ? style.secondaryDark : ''} ${
    classString ? classString : ''
  } ${props.type === 'primary-dark' ? `${style.primary} ${style.primaryDark}` : ''}`;

  const setDisabled: boolean = disabled ? disabled : false;

  return (
    <React.Fragment>
      {link ? (
        <Link className={`${classNames} link-button`} to={target}>
          {children}
        </Link>
      ) : (
        <button
          disabled={setDisabled}
          className={classNames}
          onClick={clickHandler}
          type={submit ? 'submit' : 'button'}
        >
          {children}
        </button>
      )}
    </React.Fragment>
  );
};

export default React.memo(Button);
