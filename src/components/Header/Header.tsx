import React, { useState, useCallback } from 'react';
import style from './Header.module.css';
import Polymer from '../../icons/polymer.svg';
import Hamburger from './Hamburger/Hamburger';
import MobileMenu from './MobileMenu/MobileMenu';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

interface HeaderProps {
  darkTheme?: boolean;
}

const Header: React.SFC<HeaderProps> = props => {
  const [menuOpen, setMenuOpen] = useState(false);
  const query = useStaticQuery(graphql`
    query {
      x3: markdownRemark(fileAbsolutePath: { regex: "/x3/" }) {
        frontmatter {
          productName
        }
      }
      x4: markdownRemark(fileAbsolutePath: { regex: "/x4/" }) {
        frontmatter {
          productName
        }
      }
      xhd: markdownRemark(fileAbsolutePath: { regex: "/xhd/" }) {
        frontmatter {
          productName
        }
      }
      xplus: markdownRemark(fileAbsolutePath: { regex: "/xplus/" }) {
        frontmatter {
          productName
        }
      }
    }
  `);

  const links: { name: string; target: string }[] = [
    {
      name: query.x3.frontmatter.productName,
      target: '/products/model-x3',
    },
    {
      name: query.x4.frontmatter.productName,
      target: '/products/model-x4',
    },
    {
      name: query.xplus.frontmatter.productName,
      target: '/products/model-xplus',
    },
    {
      name: query.xhd.frontmatter.productName,
      target: '/products/model-xhd',
    },
  ];

  return (
    <header className={`${style.header}${props.darkTheme ? ` ${style.headerDark}` : ''}`}>
      <Link to="/" className={style.logoContainer}>
        <figure>
          <Polymer className={style.logo} />
        </figure>
      </Link>
      <nav className={style.linkContainer}>
        {links.map((link, id) => (
          <Link key={`link-${id}`} to={link.target} className={style.link}>
            {link.name}
          </Link>
        ))}
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
