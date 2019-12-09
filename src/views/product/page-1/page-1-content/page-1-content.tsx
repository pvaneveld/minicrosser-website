import React from 'react';
import style from './page-1-content.module.css';
import Button from '../../../../components/Buttons/Button/Button';

interface ProductpageOneContentProps {}

const ProductPageOneContent: React.SFC<ProductpageOneContentProps> = () => {
  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <h2>Performance</h2>
        <h1>De sterkste motor in de markt</h1>
      </div>
      <a href="/" className={style.button}>
        <Button type="secondary-dark">Ik ben een button</Button>
      </a>

      <p className={style.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis voluptatibus unde corporis officia
        aperiam, ipsam animi corrupti quos suscipit, provident voluptatum aspernatur laboriosam, a quas possimus
        doloribus sequi odio. Praesentium!
      </p>
    </div>
  );
};

export default ProductPageOneContent;
