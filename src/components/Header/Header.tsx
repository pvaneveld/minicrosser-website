import React, { useState } from 'react';
import style from './Header.module.css';
import Polymer from '../../icons/polymer.svg';
import Hamburger from '../Hamburger/Hamburger';
import MobileMenu from '../MobileMenu/MobileMenu';
import { Link } from 'gatsby';

interface HeaderProps {
  darkTheme?: boolean;
}

const Header: React.SFC<HeaderProps> = props => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${style.header} ${props.darkTheme ? style.headerDark : null}`}>
      <Link to="/" className={style.logoContainer}>
        <figure>
          <Polymer className={style.logo} />
        </figure>
      </Link>
      <nav className={style.linkContainer}>
        <Link to="/" className={style.link}>
          modelnaam
        </Link>
        <Link to="/" className={style.link}>
          modelnaam
        </Link>
        <Link to="/" className={style.link}>
          modelnaam
        </Link>
      </nav>

      <nav className={style.hamburgerContainer}>
        <Link to="/" className={style.link}>
          vind uw dealer
        </Link>
        <Hamburger clickHandler={(): void => setMenuOpen(!menuOpen)} isActive={menuOpen} />
        <MobileMenu isActive={menuOpen} />
      </nav>
    </header>
  );
};

export default Header;
