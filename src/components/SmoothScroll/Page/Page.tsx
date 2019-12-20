import React from 'react';
import { ReactNode } from 'react';
import style from './Page.module.css';

interface PageProps {
  children: ReactNode;
  id?: string;
}

const Page: React.SFC<PageProps> = props => {
  return (
    <section id={props.id} className={style.page}>
      {props.children}
    </section>
  );
};

export default Page;
