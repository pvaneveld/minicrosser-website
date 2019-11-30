import React, { useState, useEffect } from 'react';
import ChevronUp from '../../../icons/chevron-up-circle.svg';
import style from './ScrollChevronUp.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Page, UPDATE_PAGES } from '../../../state/types';

const ScrollChevronUp: React.SFC = () => {
  const pages = useSelector((state: RootState) => state.app.pages);
  const [classes, setClasses] = useState(style.icon);
  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch({
      type: UPDATE_PAGES,
      payload: pages.map((page, index) => (index === 0 ? { ...page, inView: true } : { ...page, inView: false })),
    });
  };

  const setVisibility = (pages: Page): void => {
    const activeId = pages.reduce((acc, page, index) => (page.inView ? (acc += index) : (acc += 0)), 0);
    if (activeId > 0) {
      setClasses(`${style.icon} ${style.visible}`);
    } else {
      setClasses(style.icon);
    }
  };

  useEffect(() => {
    if (pages.length) {
      setVisibility(pages);
    }
  }, [pages]);

  return (
    <button className={classes} onClick={handleClick}>
      <ChevronUp />
    </button>
  );
};

export default React.memo(ScrollChevronUp);
