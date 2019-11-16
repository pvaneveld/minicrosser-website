import React from 'react';
import { ReactNode } from 'react';
import style from './Layout.module.css';
import '../../styles/global.css';
import 'typeface-roboto';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.SFC<LayoutProps> = props => {
  return (
    <div id="app" className={style.layout}>
      <div className={style.test}>
        <h1>asdasdasdas</h1>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
