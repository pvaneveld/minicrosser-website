import React from 'react';
import style from './page-1-content.module.css';
import Markdown from '../../../../components/Markdown/Markdown';
import Button from '../../../../components/Buttons/Button/Button';
import { title } from '../../../../templates/product';

interface ProductpageOneContentProps {
  title: title;
  text: string;
  buttonText: string;
  keyFeatures: keyFeatures;
}

const ProductPageOneContent: React.SFC<ProductpageOneContentProps> = props => {
  const { title, text, buttonText } = props;
  const { subtitle, mainTitle } = title;
  return (
    <>
      <ul className={style.keyFeatures}>
        {props.keyFeatures.map((feature, index) => (
          <li key={`feature-${index}`} className={style.feature}>
            <span className={style.featureHeading}>{feature.title}</span>
            <span className={style.featureText}>{feature.description}</span>
          </li>
        ))}
      </ul>
      <div className={style.container}>
        <header className={style.headerContainer}>
          <span className={style.subtitle}>{subtitle}</span>
          <h1>{mainTitle}</h1>
        </header>

        <Button type="secondary-dark" link={true} target="/configureren">
          {buttonText}
        </Button>

        <p className={style.text}>
          <Markdown>{text}</Markdown>
        </p>
      </div>
    </>
  );
};

export default ProductPageOneContent;
