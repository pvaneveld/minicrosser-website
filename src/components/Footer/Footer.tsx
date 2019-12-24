import React, { useRef, useEffect, useState } from 'react';
import style from './Footer.module.css';
import { Link } from 'gatsby';
import { useDispatch } from 'react-redux';
import { UPDATE_FOOTER_MARGIN } from '../../state/types';

interface FooterProps {
  darkTheme?: boolean;
}

const Footer: React.SFC<FooterProps> = props => {
  const footer = useRef(null);
  const dispatch = useDispatch();

  const footerHeightHandler = (): void => {
    const { current } = footer;
    if (footer) {
      dispatch({
        type: UPDATE_FOOTER_MARGIN,
        payload: current.getBoundingClientRect().height,
      });
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
