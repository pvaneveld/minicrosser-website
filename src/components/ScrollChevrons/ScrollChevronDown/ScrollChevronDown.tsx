import React, { useState, useEffect } from 'react';
import ChevronDown from '../../../icons/chevron-down-circle.svg';
import style from './ScrollChevronDown.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Page } from '../../../state/types';

interface ScrollChevronDownProps {
  id: string;
}

const ScrollChevronDown: React.SFC<ScrollChevronDownProps> = props => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const pages = useSelector((state: RootState) => state.app.pages);
  const dispatch = useDispatch();

  const animAtionHandler = (id: string, pages: Page): void => {
    if (pages.length) {
      const activeIndex = pages.reduce((acc, page, index) => (page.inView ? (acc += index) : (acc += 0)), 0);
      console.log(activeIndex);
    }
  };

  useEffect(() => {
    animAtionHandler(props.id, pages);
  }, [pages]);

  return (
    <button className={`${style.icon} ${style.animated}`}>
      <ChevronDown />
    </button>
  );
};

export default React.memo(ScrollChevronDown);
