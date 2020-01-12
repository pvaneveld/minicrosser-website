import React from 'react';
import style from './page-1-content.module.css';
import Markdown from '../../../../components/Markdown/Markdown';
import Button from '../../../../components/Buttons/Button/Button';
import { title } from '../../../../templates/product';

interface ProductpageOneContentProps {
  title: title;
  text: string;
  buttonText: string;
}

const ProductPageOneContent: React.SFC<ProductpageOneContentProps> = props => {
  const { title, text, buttonText } = props;
  const { subtitle, mainTitle } = title;
  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <h1>
          <span className={style.subtitle}>{subtitle}</span>
          {mainTitle}
        </h1>
      </div>

      <Button type="secondary-dark" link={true} target="/configureren">
        {buttonText}
      </Button>

      <p className={style.text}>
        <Markdown>{text}</Markdown>
      </p>
    </div>
  );
};

export default ProductPageOneContent;
