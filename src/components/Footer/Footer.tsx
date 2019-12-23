import React, { useRef, useEffect, useState } from 'react';
import style from './Footer.module.css';
import { Link } from 'gatsby';

interface FooterProps {
  darkTheme?: boolean;
  onFooterHeightChange: (height: number) => void;
}

const Footer: React.SFC<FooterProps> = props => {
  const footer = useRef(null);

  const footerHeightHandler = (): void => {
    const { onFooterHeightChange } = props;
    const { current } = footer;
    if (footer) {
      onFooterHeightChange(current.getBoundingClientRect().height);
    }
  };

  useEffect(() => {
    footerHeightHandler();
    window.addEventListener('resize', footerHeightHandler, false);

    return (): void => window.removeEventListener('resize', footerHeightHandler, false);
  }, [footer]);
  return (
    <footer ref={footer} className={`${style.footer}${props.darkTheme ? ` ${style.dark}` : ''}`}>
      <Link className={style.link} to="/">
        Pagina-naam
      </Link>
      <Link className={style.link} to="/">
        Pagina-naam
      </Link>
      <Link className={style.link} to="/">
        Pagina-naam
      </Link>
      <Link className={style.link} to="/">
        Pagina-naam
      </Link>
    </footer>
  );
};

export default Footer;
