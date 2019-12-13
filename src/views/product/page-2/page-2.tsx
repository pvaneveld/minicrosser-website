import React from 'react';
import style from './page-2.module.css';
import { title, specifications } from '../../../templates/product';

interface ProductPageTwoProps {
  title: title;
  specifications: specifications;
}

const ProductPageTwo: React.SFC<ProductPageTwoProps> = props => {
  const { title, specifications } = props;
  return (
    <div className={style.container}>
      <div>
        <header className={style.headerContainer}>
          <h1 className={style.mainTitle}>
            <span className={style.subtitle}>{title.subtitle}</span>
            {title.mainTitle}
          </h1>
        </header>
        <dl className={style.speficications}>
          {specifications.map(specification => (
            <>
              <dt className={style.specificationTitle}>{specification.title}</dt>
              <dd className={style.specificationDescription}>{specification.description}</dd>
            </>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default ProductPageTwo;
