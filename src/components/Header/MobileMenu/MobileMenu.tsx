import React from 'react';
import style from './MobileMenu.module.css';
import { Link } from 'gatsby';

interface MobileMenuProps {
  isActive?: boolean;
  links: { name: string; target: string }[];
}

const MobileMenu: React.SFC<MobileMenuProps> = props => {
  return (
    <div className={`${style.mobileMenu} ${props.isActive ? style.isActive : ''}`}>
      {props.links.map(link => (
        <Link className={style.link} to={link.target}>
          {link.name}
        </Link>
      ))}
      <Link to="/vind-uw-dealer" className={style.link}>
        Vind uw dealer
      </Link>
      <Link to="/accessoires" className={style.link}>
        Accessoires
      </Link>
      <Link to="/contact" className={style.link}>
        Contact
      </Link>
      <Link to="/privacy" className={style.link}>
        Privacybeleid
      </Link>
    </div>
  );
};

export default MobileMenu;
