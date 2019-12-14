import React from 'react';
import style from './page-1-image.module.css';
import Button from '../../../../components/Buttons/Button/Button';
import { keyFeatures } from '../../../../templates/product';

interface ProductpageOneImageProps {
  title: string;
  keyFeatures: keyFeatures;
  buttonText: string;
}

const ProductPageOneImage: React.SFC<ProductpageOneImageProps> = props => {
  const { keyFeatures, buttonText, title } = props;
  return (
    <div className={style.container}>
      <h1 className={`${style.header} jumbo`}>{title}</h1>

      <ul className={style.keyFeatures}>
        {keyFeatures.map((feature, index) => (
          <li key={`feature-${index}`} className={style.feature}>
            <h2 className={style.featureHeading}>{feature.title}</h2>
            <p className={style.featureText}>{feature.description}</p>
          </li>
        ))}
        <li className={style.ctaButton}>
          <Button>{buttonText}</Button>
        </li>
      </ul>
    </div>
  );
};

export default ProductPageOneImage;
