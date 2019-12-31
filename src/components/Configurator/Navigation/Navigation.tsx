import React from 'react';
import style from './Navigation.module.css';

const Configurator: React.SFC = () => {
  return (
    <nav className={style.navigation}>
      <ul className={style.linkList}>
        <span className={style.indicator}></span>
        <li className={`${style.navItem} ${style.active}`}>
          <div className={style.stepNumber}>
            <span>1</span>
          </div>
          <button>Step description</button>
        </li>
        <li className={`${style.navItem} ${style.active}`}>
          <div className={style.stepNumber}>
            <span>1</span>
          </div>
          <button>Step description</button>
        </li>
        <li className={`${style.navItem} ${style.active}`}>
          <div className={style.stepNumber}>
            <span>1</span>
          </div>
          <button>Step description</button>
        </li>
      </ul>
    </nav>
  );
};

export default Configurator;
