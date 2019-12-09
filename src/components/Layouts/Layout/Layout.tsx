import React from 'react';
import { ReactNode } from 'react';
import 'typeface-roboto';
import 'reset-css';
import '../../../styles/global.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Flag from '../../../icons/flag.svg';
import style from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  theme: {
    headerDark: boolean;
    footerDark: boolean;
  };
}

const Layout: React.SFC<LayoutProps> = props => {
  const { headerDark, footerDark } = props.theme;
  return (
    <div>
      <Header darkTheme={headerDark} />
      <Flag className={style.flag} />
      {props.children}
      {/* <Footer darkTheme={footerDark} /> */}
    </div>
  );
};

export default Layout;
