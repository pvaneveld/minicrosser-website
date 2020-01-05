import React, { ReactNode } from 'react';
import style from './Sidebar.module.css';
import { useSelector } from 'react-redux';
import { toCurrency } from '../../../helpers/toCurrency';

const Sidebar: React.SFC = () => {
  const selectedItems = useSelector((state: RootState) => state.configurator.selection);

  const sidebarContent: (string | { name: string; price: string }[])[][] = Object.entries(
    selectedItems.reduce((acc, curr) => {
      const item = { price: curr.price, name: curr.name };
      if (acc[curr.category]) {
        acc[curr.category].concat(item);
        return acc;
      }

      acc[curr.category] = [].concat(item);
      return acc;
    }, {}),
  );

  const totalPrice = toCurrency(
    selectedItems.reduce((acc, curr) => acc + parseFloat(curr.price), 0),
    false,
  );

  return (
    <div className={style.sidebar}>
      <ul>
        {sidebarContent.map((content, index) => {
          const [category, items] = content;

          return (
            <li key={`category-${index}`} className={style.category}>
              <h4 className={style.categoryTitle}>{category}</h4>
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
        <li className={style.totalPrice}>{totalPrice}</li>
      </ul>
    </div>
  );
};

export default Sidebar;
