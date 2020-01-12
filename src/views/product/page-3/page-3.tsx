import React from 'react';
import style from './page-3.module.css';
import ButtonGroup from '../../../components/Buttons/ButtonGroup/ButtonGroup';
import ContentContainer from '../../../components/Layouts/ContentContainer/ContentContainer';
import { ProductThree as ProductPageThreeProps } from '../../../views/product/page-3';

const ProductPageThree: React.SFC<ProductPageThreeProps> = props => {
  const { title, buttons } = props;
  const { buttonPrimary: buttonTextPrimary, buttonSecondary: buttonTextSecondary } = buttons;
  const buttonProps = [
    { children: buttonTextPrimary, link: true, target: '/configureren' },
    { children: buttonTextSecondary, type: 'secondary' as const, link: true, target: '/proefrit' },
  ];
  return (
    <div className={style.contentContainer}>
      <ContentContainer footerSpacing={true}>
        <div className={style.content}>
          <h1 className={style.header}>{title}</h1>
          <div className={style.buttonContainer}>
            <ButtonGroup buttons={buttonProps} />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default ProductPageThree;
