import React, { ReactNode } from 'react';
import style from './ContentContainer.module.css';

interface LayoutFullHeroProps {
  children?: ReactNode;
}

const LayoutFullHero: React.SFC<LayoutFullHeroProps> = props => {
  return <div className={style.content}>{props.children}</div>;
};

export default LayoutFullHero;
