import React from 'react';
import { ReactNode } from 'react';
import style from './HeaderFooterSpacing.module.css';
import { useSelector } from 'react-redux';

interface PageProps {
  headerSpacing?: boolean;
  footerSpacing?: boolean;
}

const Page: React.SFC<PageProps> = props => {
  const { headerSpacing, footerSpacing } = props;
  const headerMargin = useSelector((state: RootState) => state.app.headerMargin);
  const footerMargin = useSelector((state: RootState) => state.app.footerMargin);

  const spacerStyle = {
    height: `${headerSpacing && !footerSpacing ? headerMargin : footerMargin}px`,
  };

  return <div style={spacerStyle} className={style.hidden}></div>;
};

export default Page;
