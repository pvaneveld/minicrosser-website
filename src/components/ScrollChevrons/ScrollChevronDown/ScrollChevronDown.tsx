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
  const [classes, setClasses] = useState(`${style.icon}`);
  const pages = useSelector((state: RootState) => state.app.pages);
  const dispatch = useDispatch();

  const animAtionHandler = (id: string, pages: Page): void => {
    if (pages.length && pages.find(page => page.inView).id === props.id) {
      setHasAnimated(true);
      setClasses(classes => `${classes} ${style.animated}`);
    }
  };

  const handleClick = (): void => {
    const newIndex = pages.reduce((acc, page, index) => (page.inView ? (acc += index) : (acc += 0)), 0) + 1;
    if (newIndex < pages.length) {
      dispatch({
        type: 'UPDATE_PAGES',
        payload: pages.map((page, index) =>
          index === newIndex ? { ...page, inView: true } : { ...page, inView: false },
        ),
      });
    }
  };

  useEffect(() => {
    if (!hasAnimated) {
      animAtionHandler(props.id, pages);
    }
  }, [pages]);

  return (
    <button className={classes} onClick={handleClick}>
      <ChevronDown />
    </button>
  );
};

export default React.memo(ScrollChevronDown);
