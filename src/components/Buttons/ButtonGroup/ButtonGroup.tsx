import React from 'react';
import style from './ButtonGroup.module.css';
import ButtonComponent, { ButtonProps } from '../Button/Button';

interface ButtonGroupProps {
  buttons: ButtonProps[];
}

const Button: React.SFC<ButtonGroupProps> = props => {
  return (
    <div className={style.container}>
      {props.buttons.map((button, index) => (
        <ButtonComponent
          key={`button-${index}`}
          type={button.type}
          link={button.link}
          clickHandler={button.clickHandler}
        >
          {button.children}
        </ButtonComponent>
      ))}
    </div>
  );
};

export default Button;
