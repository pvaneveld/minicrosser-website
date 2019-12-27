import React, { ReactNode } from 'react';
import style from './Marker.module.css';

interface MarkerProps {
  children: ReactNode;
  classString?: string;
  id?: string;
  clickHandler?: (e: React.MouseEvent) => void;
}

const Marker: React.SFC<MarkerProps> = props => {
  const { children, classString, id, clickHandler } = props;
  return (
    <div id={id ? id : ''} onClick={clickHandler} className={`${style.marker} ${classString ? classString : ''}`}>
      {children}
    </div>
  );
};

export default Marker;
