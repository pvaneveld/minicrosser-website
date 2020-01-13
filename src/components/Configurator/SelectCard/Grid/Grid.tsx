import React, { ReactNode } from 'react';
import style from './Grid.module.css';

interface SelectCardGridProps {
  children: ReactNode;
}
const SelectCardGrid: React.SFC<SelectCardGridProps> = props => {
  return <ul className={style.grid}>{props.children}</ul>;
};

export default SelectCardGrid;
