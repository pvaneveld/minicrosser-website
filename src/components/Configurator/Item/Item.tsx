import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateConfiguratorSelection } from '../../../state/actions';

interface ConfiguratorItemProps {
  category: string;
  name: string;
  price: number;
  selectMultiple: boolean;
  selectCallback?: () => void;
  isActiveCallback?: (item: { selected: boolean; name: string }) => void;
  children: ReactNode;
  classString?: string;
}

const ConfiguratorItem: React.SFC<ConfiguratorItemProps> = props => {
  const { category, name, price, selectMultiple, children, selectCallback, isActiveCallback } = props;
  const dispatch = useDispatch();
  const currentSelection = useSelector((state: RootState) => state.configurator.selection);

  const updateSelection = (): void => {
    const item = {
      category,
      name,
      price,
    };

    const isSelected = currentSelection.find(item => item.name === name) ? true : false;

    if (isSelected) {
      dispatch(updateConfiguratorSelection(currentSelection.filter(item => item.name !== name)));
      isActiveCallback && isActiveCallback({ selected: false, name });
    } else {
      if (selectMultiple) {
        dispatch(updateConfiguratorSelection(currentSelection.concat(item)));
      } else {
        dispatch(
          updateConfiguratorSelection(
            currentSelection.length
              ? currentSelection.filter(item => item.category !== category).concat(item)
              : currentSelection.concat(item),
          ),
        );
      }
      isActiveCallback && isActiveCallback({ selected: true, name });
    }
    selectCallback && selectCallback();
  };

  return (
    <li
      style={{ listStyleType: 'none' }}
      onClick={updateSelection}
      className={props.classString ? props.classString : ''}
    >
      {children}
    </li>
  );
};

export default ConfiguratorItem;
