import React from 'react';
import style from './page-1-image.module.css';

interface ProductpageOneImageProps {}

const ProductPageOneImage: React.SFC<ProductpageOneImageProps> = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1 className={style.subHeader}>minicrosser</h1>
        <span className="jumbo">Model x4</span>
      </header>

      <ul className={style.keyFeatures}>
        <li className={style.feature}>
          <h2 className={style.featureHeading}>ik ben een feature</h2>
          <p className={style.featureText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia accusamus reiciendis minus rerum rem
            explicabo magnam optio
          </p>
        </li>
        <li className={style.feature}>
          <h2 className={style.featureHeading}>ik ben een feature</h2>
          <p className={style.featureText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia accusamus reiciendis minus rerum rem
            explicabo magnam optio
          </p>
        </li>
        <li className={style.feature}>
          <h2 className={style.featureHeading}>ik ben een feature</h2>
          <p className={style.featureText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia accusamus reiciendis minus rerum rem
            explicabo magnam optio
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ProductPageOneImage;
