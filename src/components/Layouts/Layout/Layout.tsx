import React from 'react';
import { ReactNode } from 'react';
import 'typeface-roboto';
import 'reset-css';
import '../../../styles/global.css';
import Header from '../../Header/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.SFC<LayoutProps> = props => {
  return (
    <div id="app">
      <Header darkTheme={true} />
      {props.children}
    </div>
  );
};

export default Layout;
