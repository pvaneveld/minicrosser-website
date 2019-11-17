import React from 'react';
import { ReactNode } from 'react';
import style from './Page.module.css';
import mockImage from '../../img/mock-image.jpg';

interface PageProps {
  children?: ReactNode;
  id: string;
  firstPage: boolean;
  lastPage: boolean;
}

const Page: React.SFC<PageProps> = props => {
  return (
    <div id={props.id} className={style.page}>
      <img src={mockImage} alt="mock" className={style.image} />
      <div
        className={`${style.pageContent} ${props.firstPage ? style.firstPage : ''} ${
          props.lastPage ? style.lastPage : ''
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Page;
