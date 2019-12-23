import React, { useRef, useState } from 'react';
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
  const [footerStyle, setFooterStyle] = useState({
    paddingTop: '0px',
  });
  const [headerStyle, setheaderStyle] = useState({
    height: '0px',
  });

  return (
    <div className={style.layout}>
      <div style={headerStyle}></div>
      <Header darkTheme={headerDark} />
      <Flag className={style.flag} />
      {props.children}

      <div style={footerStyle}></div>
      <Footer
        darkTheme={footerDark}
        onFooterHeightChange={(newHeight: number): void => setFooterStyle({ paddingTop: `${newHeight}px` })}
      />
    </div>
  );
};

export default Layout;
