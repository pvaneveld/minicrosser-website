import React, { ReactNode } from 'react';
import style from './Marker.module.css';
import HeaderFooterSpacing from '../HeaderFooterSpacing/HeaderFooterSpacing';

interface MarkerProps {
  children: ReactNode;
}

const Marker: React.SFC<MarkerProps> = props => {
  const { children } = props;
  return <div className={style.marker}>{children}</div>;
};

export default Marker;
