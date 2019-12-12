import React from 'react';
import style from './page-1-content.module.css';
import Button from '../../../../components/Buttons/Button/Button';

interface ProductpageOneContentProps {
  title: string;
  text: string;
  buttonText: string;
}

const ProductPageOneContent: React.SFC<ProductpageOneContentProps> = props => {
  const { title, text, buttonText } = props;
  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <h1>{title}</h1>
      </div>
      <a href="/" className={style.button}>
        <Button type="secondary-dark">{buttonText}</Button>
      </a>

      <p className={style.text}>{text}</p>
    </div>
  );
};

export default ProductPageOneContent;
