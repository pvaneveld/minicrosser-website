import React from 'react';
import style from './Navigation.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeConfiguratorPage } from '../../../state/actions';

const Configurator: React.SFC = () => {
  const navData: string[] = ['model', 'kleur', 'bediening', 'zitsysteem', 'accessoires', 'uw minicrosser'];
  const currentPage = useSelector((state: RootState) => state.configurator.page);

  const validUntil = useSelector((state: RootState) => state.configurator.validUntil);

  const indicatorStyle = {
    transform: `translateX(calc(var(--nav-item-width) * ${currentPage - 1}))`,
  };

  const dispatch = useDispatch();

  const navigateToPage = (clickedIndex: number): void => {
    if (clickedIndex < validUntil) {
      dispatch(changeConfiguratorPage(clickedIndex + 1));
    }
  };

  return (
    <nav className={style.navigation}>
      <ul className={style.linkList}>
        <span style={indicatorStyle} className={style.indicator}></span>
        {navData.map((item, index) => (
          <button
            disabled={index >= validUntil}
            onClick={(): void => navigateToPage(index)}
            key={`item-${index}`}
            className={`${style.navItem} ${currentPage - 1 === index ? style.active : ''}`}
          >
            <div className={style.stepNumber}>
              <span>{index + 1}</span>
            </div>
            <span className={style.navText}>{item}</span>
          </button>
        ))}
      </ul>
    </nav>
  );
};

export default Configurator;
