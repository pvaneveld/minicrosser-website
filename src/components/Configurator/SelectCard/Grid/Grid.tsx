import React, { ReactNode } from 'react';
import style from './Grid.module.css';

interface SelectCardGridProps {
  children: ReactNode;
}
const SelectCardGrid: React.SFC<SelectCardGridProps> = props => {
  return <div className={style.grid}>{props.children}</div>;
};

export default SelectCardGrid;
