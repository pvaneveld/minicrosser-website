import React, { useEffect } from 'react';
import { ReactNode } from 'react';
import style from './Page.module.css';

interface PageProps {
  children: ReactNode;
  id?: string;
  background?: 'gray' | 'black';
}

const Page: React.SFC<PageProps> = props => {
  const { background, id } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      id={id}
      className={`${style.page} ${background === 'gray' ? style.gray : ''} ${
        background === 'black' ? style.black : ''
      }`}
    >
      {props.children}
    </section>
  );
};

export default Page;
