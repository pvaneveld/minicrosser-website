import React from 'react';
import style from './page-1-image.module.css';

interface ProductpageOneImageProps {
  title: string;
}

const ProductPageOneImage: React.SFC<ProductpageOneImageProps> = props => {
  const { title } = props;
  return (
    <>
      <h1 className={`${style.header} jumbo`}>{title}</h1>
    </>
  );
};

export default ProductPageOneImage;
