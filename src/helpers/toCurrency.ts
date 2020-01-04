export const toCurrency = (price: string, noDecimals = false): string => {
  const formattedPrice = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(parseInt(price));

  if (noDecimals) {
    return formattedPrice.replace(/,.*/, '');
  }

  return formattedPrice;
};
