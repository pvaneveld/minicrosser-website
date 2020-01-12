import React from 'react';
import { ReactNode } from 'react';
import 'typeface-roboto';
import 'reset-css';
import '../../../styles/global.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Flag from '../../../icons/flag.svg';
import style from './Layout.module.css';
import { usePageHeight } from '../../../hooks/usePageHeight';
import Head from '../Head/Head';

interface LayoutProps {
  children: ReactNode;
  theme: {
    headerDark: boolean;
    footerDark: boolean;
  };
  configurator?: boolean;
}

const Layout: React.SFC<LayoutProps> = props => {
  usePageHeight();
  const { headerDark, footerDark } = props.theme;
  return (
    <>
      <Head />
      <div className={style.layout} role="main">
        <Header configurator={props.configurator} darkTheme={headerDark} />
        {!props.configurator && <Flag className={style.flag} />}
        {props.children}

        <Footer darkTheme={footerDark} />
      </div>
    </>
  );
};

export default Layout;
