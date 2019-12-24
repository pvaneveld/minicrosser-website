import React from 'react';
import { ReactNode } from 'react';
import style from './Page.module.css';
import { useSelector } from 'react-redux';

interface PageProps {
  children: ReactNode;
  id?: string;
  background?: 'gray';
  headerSpacing?: boolean;
  footerSpacing?: boolean;
}

const Page: React.SFC<PageProps> = props => {
  const { background, id, headerSpacing, footerSpacing } = props;
  const headerMargin = useSelector((state: RootState) => state.app.headerMargin);
  const footerMargin = useSelector((state: RootState) => state.app.footerMargin);

  const headerStyle = {
    height: `${headerMargin}px`,
  };

  const footerStyle = {
    height: `${footerMargin}px`,
  };

  return (
    <section id={id} className={`${style.page} ${background === 'gray' ? style.gray : ''}`}>
      {headerSpacing && <div style={headerStyle} className={style.hidden}></div>}
      {props.children}
      {footerSpacing && <div style={footerStyle} className={style.hidden}></div>}
    </section>
  );
};

export default Page;
