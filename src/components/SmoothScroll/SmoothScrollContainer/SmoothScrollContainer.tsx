import React, { FunctionComponent, useEffect, useState, useCallback, useRef } from 'react';
import { ReactNode } from 'react';
import SmoothScrollNavigation from '../SmoothScrollNavigation/SmoothScrollNavigation';
import ScrollChevronUp from '../../ScrollChevrons/ScrollChevronUp/ScrollChevronUp';
import style from './SmoothScrollContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Page } from '../../../state/types';
import { updatePages } from '../../../state/actions';

interface SmoothScrollContainerProps {
  children: ReactNode;
  pages: { id: string; title: string }[];
}

const SmoothScrollContainer: FunctionComponent<SmoothScrollContainerProps> = props => {
  const [pages, setPages] = useState(
    props.pages.map((page, index) => (index === 0 ? { ...page, inView: true } : { ...page, inView: false })),
  );

  const statePages = useSelector((state: RootState) => state.app.pages);

  const dispatch = useDispatch();

  const currentActiveID = useRef('');

  const pageElements = useRef(null);

  const getPages = ({ pages }: Partial<SmoothScrollContainerProps>): HTMLElement[] => {
    pageElements.current = pages.map(page => document.querySelector(`#${page.id}`));
    return pageElements.current;
  };

  const checkNoInitialLoad = (intersectionRatio: number): boolean => intersectionRatio > 0 && intersectionRatio < 1;

  const checkTargetNotInview = (id: string, currentActiveID: string): boolean => {
    return id !== currentActiveID;
  };

  const setActivePagesByID = (pages: Page, id: string): void => {
    setPages(
      pages
        .map(page => ({ ...page, inView: false }))
        .map(page => (page.id === id ? { ...page, inView: true } : { ...page, inView: false })),
    );
  };

  const pagesHandler = (entry: IntersectionObserverEntry): void => {
    const { target, intersectionRatio } = entry;
    const id = target.id;

    if (checkNoInitialLoad(intersectionRatio) && checkTargetNotInview(id, currentActiveID.current)) {
      setActivePagesByID(pages, id);
    }
  };

  const IntersectionObserverCallBack = (entries: IntersectionObserverEntry[]): void =>
    entries.forEach(entry => {
      pagesHandler(entry);
    });

  const InitIntersectionObserver = useCallback(() => {
    const observer = new IntersectionObserver(IntersectionObserverCallBack, {
      threshold: [0.75],
    });
    getPages({ pages: props.pages }).forEach(page => observer.observe(page));
    return observer;
  }, []);

  const updatActiveID = (pages: Page): void => {
    currentActiveID.current = pages.find(page => page.inView === true).id;
  };

  const navButtonClickHandler = (clickedId: string): void => {
    const { current: pageDOMElements } = pageElements;
    const target = pageDOMElements.find((el: HTMLElement) => el.id === clickedId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = InitIntersectionObserver();

    return (): void => observer.disconnect();
  }, [InitIntersectionObserver]);

  useEffect(() => {
    updatActiveID(pages);
    dispatch(updatePages(pages));
  }, [pages]);

  useEffect(() => {
    if (statePages.length) {
      const activeId = statePages.find(page => page.inView).id;
      if (currentActiveID.current !== activeId) {
        navButtonClickHandler(activeId);
      }
    }
  }, [statePages]);

  useEffect(() => {
    if (!('scrollBehavior' in document.documentElement.style)) {
      import('scroll-behavior-polyfill');
    }
  }, []);

  return (
    <div className={style.container}>
      <ScrollChevronUp />
      <SmoothScrollNavigation clickHandler={(id: string): void => navButtonClickHandler(id)} pages={pages} />
      {props.children}
    </div>
  );
};

export default SmoothScrollContainer;
