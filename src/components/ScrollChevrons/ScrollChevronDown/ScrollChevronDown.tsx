import React from 'react';
import ChevronDown from '../../../icons/chevron-down-circle.svg';
import style from './ScrollChevronDown.module.css';

const ScrollChevronDown: React.SFC = () => (
  <button className={style.icon}>
    <ChevronDown />
  </button>
);

export default React.memo(ScrollChevronDown);
