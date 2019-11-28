import React, { FunctionComponent, useEffect, useState, useCallback, useRef } from 'react';
import { ReactNode } from 'react';
import SmoothScrollNavigation from '../SmoothScrollNavigation/SmoothScrollNavigation';
import style from './SmoothScrollContainer.module.css';

interface SmoothScrollContainerProps {
  children: ReactNode;
  pages: { id: string; title: string }[];
}

interface Pages {
  pages: { id: string; title: string; inView: boolean }[];
}

const SmoothScrollContainer: FunctionComponent<SmoothScrollContainerProps> = props => {
  const [pages, setPages] = useState(
    props.pages.map((page, index) => (index === 0 ? { ...page, inView: true } : { ...page, inView: false })),
  );

  const currentActiveID = useRef('');

  const getPages = ({ pages }: Partial<SmoothScrollContainerProps>): HTMLElement[] => {
    return pages.map(page => document.querySelector(`#${page.id}`));
  };

  const checkNoInitialLoad = (intersectionRatio: number): boolean => intersectionRatio > 0 && intersectionRatio < 1;

  const checkTargetNotInview = (id: string, currentActiveID: string): boolean => {
    return id !== currentActiveID;
  };

  const pagesHandler = (entry: IntersectionObserverEntry): void => {
    const { target, intersectionRatio } = entry;
    const id = target.id;

    if (checkNoInitialLoad(intersectionRatio) && checkTargetNotInview(id, currentActiveID.current)) {
      setPages(
        pages
          .map(page => ({ ...page, inView: false }))
          .map(page => (page.id === id ? { ...page, inView: true } : { ...page, inView: false })),
      );
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

  const updatActiveID = ({ pages }: Pages): void => {
    currentActiveID.current = pages.find(page => page.inView === true).id;
  };

  useEffect(() => {
    const observer = InitIntersectionObserver();

    return (): void => observer.disconnect();
  }, [InitIntersectionObserver]);

  useEffect(() => {
    updatActiveID({ pages });
  }, [pages]);

  return (
    <div className={style.container}>
      <SmoothScrollNavigation pages={pages} />
      {props.children}
    </div>
  );
};

export default SmoothScrollContainer;
