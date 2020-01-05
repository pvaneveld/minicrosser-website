export const toCurrency = (price: number, noDecimals = false): string => {
  const formattedPrice = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(price);

  if (noDecimals) {
    return formattedPrice.replace(/,.*/, '');
  }

  return formattedPrice;
};
