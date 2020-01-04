import React from 'react';
import style from './Navigation.module.css';
import { useSelector } from 'react-redux';

const Configurator: React.SFC = () => {
  const navData: string[] = ['model', 'kleur', 'bediening', 'zitsysteem', 'accessoires', 'uw minicrosser'];
  const currentPage = useSelector((state: RootState) => state.configurator.page);

  const indicatorStyle = {
    transform: `translateX(calc(var(--nav-item-width) * ${currentPage - 1}))`,
  };

  return (
    <nav className={style.navigation}>
      <ul className={style.linkList}>
        <span style={indicatorStyle} className={style.indicator}></span>
        {navData.map((item, index) => (
          <li key={`item-${index}`} className={`${style.navItem} ${currentPage - 1 === index ? style.active : ''}`}>
            <div className={style.stepNumber}>
              <span>{index + 1}</span>
            </div>
            <span className={style.navText}>{item}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Configurator;
