import React, { ReactNode } from 'react';
import style from './ContentContainer.module.css';
import HeaderFooterSpacing from '../HeaderFooterSpacing/HeaderFooterSpacing';

interface LayoutFullHeroProps {
  children?: ReactNode;
  headerSpacing?: boolean;
  footerSpacing?: boolean;
}

const LayoutFullHero: React.SFC<LayoutFullHeroProps> = props => {
  const { headerSpacing, footerSpacing, children } = props;
  return (
    <div className={style.content}>
      {headerSpacing && <HeaderFooterSpacing headerSpacing={true} />}
      {children}
      {footerSpacing && <HeaderFooterSpacing footerSpacing={true} />}
    </div>
  );
};

export default LayoutFullHero;
