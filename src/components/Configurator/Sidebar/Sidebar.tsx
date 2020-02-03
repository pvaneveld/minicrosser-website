import React, { ReactNode } from 'react';
import style from './Sidebar.module.css';
import { useSelector } from 'react-redux';
import { toCurrency } from '../../../helpers/toCurrency';
import { parseSidebarConfig, parseTotalPrice } from '../../../../helpers/parseConfiguration';

const Sidebar: React.SFC = () => {
  const selectedItems = useSelector((state: RootState) => state.configurator.selection);

  const sidebarContent: string | { name: string; price: string }[] = parseSidebarConfig(selectedItems);

  return (
    <div className={style.sidebar}>
      <h3 className={style.header}>Uw Minicrosser</h3>
      <ul className={style.itemList}>
        {sidebarContent.map((content, index) => {
          const [category, items] = content;

          return (
            <li key={`category-${index}`} className={style.category}>
              <h2 className={style.categoryTitle}>{category}</h2>
              <ul>
                {items.map((item, index) => (
                  <li className={style.selectedItem} key={`item-${index}`}>
                    <span>&#9642; {item.name}</span>
                    <span>{toCurrency(item.price)}</span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
        <li className={style.totalPrice}>{parseTotalPrice(selectedItems)}</li>
      </ul>
      <span className={style.taxDisclaimer}>De vermelde prijzen zijn inclusief BTW</span>
    </div>
  );
};

export default Sidebar;
