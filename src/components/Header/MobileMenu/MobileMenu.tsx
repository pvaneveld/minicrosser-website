import React from 'react';
import style from './MobileMenu.module.css';
import { Link } from 'gatsby';

interface MobileMenuProps {
  isActive?: boolean;
}

const MobileMenu: React.SFC<MobileMenuProps> = props => {
  return (
    <div className={`${style.mobileMenu} ${props.isActive ? style.isActive : ''}`}>
      <Link to="/" className={style.link}>
        Hier komt een link
      </Link>
      <Link to="/" className={style.link}>
        Hier komt een link
      </Link>
      <Link to="/" className={style.link}>
        Hier komt een link
      </Link>
      <Link to="/" className={style.link}>
        Hier komt een link
      </Link>
      <Link to="/" className={style.link}>
        Hier komt een link
      </Link>
    </div>
  );
};

export default MobileMenu;
