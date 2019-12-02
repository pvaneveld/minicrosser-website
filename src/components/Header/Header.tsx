import React, { useState, useCallback } from 'react';
import style from './Header.module.css';
import Logo from '../../icons/logo.svg';
import Hamburger from './Hamburger/Hamburger';
import MobileMenu from './MobileMenu/MobileMenu';
import { Link } from 'gatsby';

interface HeaderProps {
  darkTheme?: boolean;
}

const Header: React.SFC<HeaderProps> = props => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${style.header}${props.darkTheme ? ` ${style.headerDark}` : ''}`}>
      <Link to="/" className={style.logoContainer}>
        <figure>
          <Logo className={style.logo} />
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
        <Hamburger
          clickHandler={useCallback(() => setMenuOpen(menuOpen => (menuOpen = !menuOpen)), [setMenuOpen])}
          isActive={menuOpen}
        />
      </nav>
      <MobileMenu isActive={menuOpen} />
    </header>
  );
};

export default Header;
