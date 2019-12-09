import React from 'react';
import style from './page-1-image.module.css';
import Button from '../../../../components/Buttons/Button/Button';

interface ProductpageOneImageProps {}

const ProductPageOneImage: React.SFC<ProductpageOneImageProps> = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <span className="jumbo">Model x4</span>
      </header>

      <ul className={style.keyFeatures}>
        <li className={style.feature}>
          <h2 className={style.featureHeading}>feature</h2>
          <p className={style.featureText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. explicabo magnam optio
          </p>
        </li>
        <li className={style.feature}>
          <h2 className={style.featureHeading}>feature</h2>
          <p className={style.featureText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. explicabo magnam optio
          </p>
        </li>
        <li className={style.feature}>
          <h2 className={style.featureHeading}>feature</h2>
          <p className={style.featureText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. explicabo magnam optio
          </p>
        </li>
        <li className={style.ctaButton}>
          <Button>Configureren</Button>
        </li>
      </ul>
    </div>
  );
};

export default ProductPageOneImage;
