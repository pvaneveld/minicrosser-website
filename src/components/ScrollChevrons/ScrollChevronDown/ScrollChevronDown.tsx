import React, { useState, useEffect } from 'react';
import ChevronDown from '../../../icons/chevron-down-circle.svg';
import style from './ScrollChevronDown.module.css';
import { useSelector } from 'react-redux';
import { Page } from '../../../state/types';

interface ScrollChevronDownProps {
  id: string;
  colorBlack?: boolean;
}

const ScrollChevronDown: React.SFC<ScrollChevronDownProps> = props => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [classes, setClasses] = useState(`${style.icon}`);
  const pages = useSelector((state: RootState) => state.app.pages);

  const animAtionHandler = (id: string, pages: Page): void => {
    if (pages.length && pages.find(page => page.inView).id === props.id) {
      setHasAnimated(true);
      setClasses(classes => `${classes} ${style.animated}`);
    }
  };

  const handleClick = (id: string): void => {
    const newIndex = pages.reduce((acc, page, index) => (page.id === id ? (acc += index) : (acc += 0)), 0) + 1;
    if (newIndex < pages.length) {
      document.querySelector(`#${pages[newIndex].id}`).scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!hasAnimated) {
      animAtionHandler(props.id, pages);
    }
  }, [pages]);

  const { id, colorBlack } = props;

  return (
    <button className={classes} onClick={(): void => handleClick(id)} aria-label="scroll omlaag">
      <ChevronDown className={colorBlack ? style.black : ''} />
    </button>
  );
};

export default React.memo(ScrollChevronDown);
