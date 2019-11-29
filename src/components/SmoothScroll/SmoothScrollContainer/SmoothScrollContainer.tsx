import React, { FunctionComponent, useEffect, useState, useCallback, useRef } from 'react';
import { ReactNode } from 'react';
import SmoothScrollNavigation from '../SmoothScrollNavigation/SmoothScrollNavigation';
import style from './SmoothScrollContainer.module.css';
import { useDispatch } from 'react-redux';

interface SmoothScrollContainerProps {
  children: ReactNode;
  pages: { id: string; title: string }[];
}

type pages = { inView: boolean; id: string; title: string }[];

const SmoothScrollContainer: FunctionComponent<SmoothScrollContainerProps> = props => {
  const [pages, setPages] = useState(
    props.pages.map((page, index) => (index === 0 ? { ...page, inView: true } : { ...page, inView: false })),
  );

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

  const setActivePagesByID = (pages: pages, id: string): void => {
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

  const updatActiveID = (pages: pages): void => {
    currentActiveID.current = pages.find(page => page.inView === true).id;
  };

  const navButtonClickHandler = (clickedId: string): void => {
    const { current: pageDOMElements } = pageElements;
    pageDOMElements.find((el: HTMLElement) => el.id === clickedId).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = InitIntersectionObserver();

    return (): void => observer.disconnect();
  }, [InitIntersectionObserver]);

  useEffect(() => {
    updatActiveID(pages);
    dispatch({
      type: 'UPDATE_PAGES',
      payload: pages,
    });
  }, [pages]);

  return (
    <div className={style.container}>
      <SmoothScrollNavigation clickHandler={(id: string): void => navButtonClickHandler(id)} pages={pages} />
      {props.children}
    </div>
  );
};

export default SmoothScrollContainer;
