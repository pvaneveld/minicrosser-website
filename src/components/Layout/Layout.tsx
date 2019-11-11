import React from 'react';
import { ReactNode } from 'react';
import style from './Layout.module.css';
import '../../styles/global.css';
import 'normalize.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.SFC<LayoutProps> = props => {
  return <div className={style.heading}>{props.children}</div>;
};

export default Layout;
