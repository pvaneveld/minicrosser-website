import React, { useRef, useEffect, useState } from 'react';
import style from './Footer.module.css';
import { Link } from 'gatsby';
import { useDispatch } from 'react-redux';
import { updateFooterMargin } from '../../state/actions';

interface FooterProps {
  darkTheme?: boolean;
}

const Footer: React.SFC<FooterProps> = props => {
  const footer = useRef(null);
  const dispatch = useDispatch();

  const footerHeightHandler = (): void => {
    const { current } = footer;
    if (footer) {
      dispatch(updateFooterMargin(current.getBoundingClientRect().height));
    }
  };

  useEffect(() => {
    footerHeightHandler();
    window.addEventListener('resize', footerHeightHandler, false);

    return (): void => window.removeEventListener('resize', footerHeightHandler, false);
  }, [footer]);
  return (
    <footer ref={footer} className={`${style.footer}${props.darkTheme ? ` ${style.dark}` : ''}`}>
      <Link className={style.link} to="/contact">
        Contact
      </Link>
      <Link className={style.link} to="/privacy">
        Privacy Policy
      </Link>
      <Link className={style.link} to="/disclaimer">
        Disclaimer
      </Link>
      <a href="https://www.revamed.com/" target="_blank" className={style.link}>
        Revamed &#169; 2020
      </a>
    </footer>
  );
};

export default Footer;
