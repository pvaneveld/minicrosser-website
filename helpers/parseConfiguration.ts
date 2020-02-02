import { toCurrency } from '../src/helpers/toCurrency';

export const parseSidebarConfig = selectedItems => {
  return Object.entries(
    selectedItems.reduce((acc, curr) => {
      const item = { price: curr.price, name: curr.name };
      if (acc[curr.category]) {
        acc[curr.category] = acc[curr.category].concat(item);
      } else {
        acc[curr.category] = [].concat(item);
      }

      return acc;
    }, {}),
  );
};

export const parseTotalPrice = selectedItems => {
  return toCurrency(
    selectedItems.reduce((acc, curr) => acc + parseFloat(curr.price), 0),
    false,
  );
};
