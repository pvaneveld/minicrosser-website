import React, { useState, useEffect } from 'react';
import ChevronUp from '../../../icons/chevron-up-circle.svg';
import style from './ScrollChevronUp.module.css';
import { useSelector } from 'react-redux';
import { Page } from '../../../state/types';

const ScrollChevronUp: React.SFC = () => {
  const pages = useSelector((state: RootState) => state.app.pages);
  const [classes, setClasses] = useState(style.icon);

  const handleClick = (): void => {
    document.querySelector(`#${pages[0].id}`).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
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
