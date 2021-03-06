import React, { useState, useCallback, useEffect, useRef } from 'react';
import style from './Header.module.css';
import Polymer from '../../icons/polymer.svg';
import Hamburger from './Hamburger/Hamburger';
import MobileMenu from './MobileMenu/MobileMenu';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import { useDispatch } from 'react-redux';
import { updateHeaderMargin } from '../../state/actions';
import ConfiguratorNavigation from '../Configurator/Navigation/Navigation';
import LogoDesktop from './../../icons/logo-dekstop.svg';
import LogoMobile from './../../icons/logo-mobile.svg';

interface HeaderProps {
  darkTheme?: boolean;
  configurator?: boolean;
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

  const header = useRef(null);
  const dispatch = useDispatch();
  const headerHeightHandler = (): void => {
    const { current: currentHeader } = header;
    if (currentHeader) {
      dispatch(updateHeaderMargin(currentHeader.getBoundingClientRect().height));
    }
  };

  useEffect(() => {
    headerHeightHandler();
    window.addEventListener('resize', headerHeightHandler, false);
    return (): void => window.removeEventListener('resize', headerHeightHandler, false);
  }, [header]);

  const headerStyle = {
    paddingBottom: props.configurator ? '0px' : 'var(--space-md)',
    display: props.configurator ? 'block' : 'flex',
    position: props.configurator ? 'fixed' : 'absolute',
  };

  return (
    <header
      ref={header}
      style={headerStyle}
      className={`${style.header}${props.darkTheme ? ` ${style.headerDark}` : ''}`}
    >
      <Link to="/" className={style.logoContainer} aria-label="link naar de homepage">
        <figure>
          <LogoDesktop className={style.logoDesktop} />
          <LogoMobile className={style.logoMobile} />
        </figure>
      </Link>

      {props.configurator ? (
        <ConfiguratorNavigation />
      ) : (
        <>
          <nav className={style.linkContainer} role="navigation" aria-label="main navigation desktop">
            {links.map((link, id) => (
              <Link key={`link-${id}`} to={link.target} className={style.link}>
                {link.name}
              </Link>
            ))}
          </nav>

          <nav className={style.hamburgerContainer} role="navigation" aria-label="hamburger navigation">
            <Link to="/vind-uw-dealer" className={style.link}>
              vind uw dealer
            </Link>
            <Hamburger
              clickHandler={useCallback(() => setMenuOpen(menuOpen => (menuOpen = !menuOpen)), [setMenuOpen])}
              isActive={menuOpen}
            />
          </nav>
        </>
      )}
      <MobileMenu links={links} isActive={menuOpen} />
    </header>
  );
};

export default Header;
