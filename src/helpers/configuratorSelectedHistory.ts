export default (
  currentSelection: any[],
  category: string,
  selectMultiple: boolean,
  selectCallback: any,
  currentItems: string[],
): void => {
  const items = currentSelection.filter(item => item.category === category);
  if (items.length) {
    const selectedItems = [];
    items.forEach(element => {
      if (selectMultiple) {
        selectedItems.push(element.name);
      } else {
        selectCallback(element.name);
      }
    });

    if (selectMultiple) {
      selectCallback(selectedItems);
    }
  }
};
