import React from 'react';
import { ReactNode } from 'react';
import style from './Page.module.css';

interface PageProps {
  children: ReactNode;
  id?: string;
  background?: 'gray';
}

const Page: React.SFC<PageProps> = props => {
  const { background } = props;
  return (
    <section id={props.id} className={`${style.page} ${background === 'gray' ? style.gray : ''}`}>
      {props.children}
    </section>
  );
};

export default Page;
