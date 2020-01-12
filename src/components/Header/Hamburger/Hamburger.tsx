import React, { useEffect } from 'react';
import style from './Hamburger.module.css';

interface HamburgerProps {
  isActive?: boolean;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Hamburger: React.SFC<HamburgerProps> = props => {
  useEffect(() => {
    const overflow = props.isActive ? 'hidden' : 'auto';

    document.body.setAttribute('style', `overflow-y: ${overflow}`);
  }, [props.isActive]);

  return (
    <button
      onClick={props.clickHandler}
      className={`${style.hamburger} ${style.hamburgerSpring}${props.isActive ? ` ${style.isActive}` : ''}`}
      type="button"
    >
      <span className={style.hamburgerBox}>
        <span className={style.hamburgerInner}></span>
      </span>
    </button>
  );
};

export default React.memo(Hamburger);
