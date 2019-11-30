import React from 'react';
import style from './Footer.module.css';
import { Link } from 'gatsby';

interface FooterProps {
  darkTheme?: boolean;
}

const Footer: React.SFC<FooterProps> = props => (
  <footer className={`${style.footer}${props.darkTheme ? ` ${style.dark}` : ''}`}>
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

export default Footer;
