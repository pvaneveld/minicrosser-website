import React from 'react';
import { ReactNode } from 'react';
import style from './Page.module.css';
import { useSelector } from 'react-redux';

interface PageProps {
  children: ReactNode;
  id?: string;
  background?: 'gray' | 'black';
}

const Page: React.SFC<PageProps> = props => {
  const { background, id } = props;

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
