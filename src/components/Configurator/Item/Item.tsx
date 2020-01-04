import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateConfiguratorSelection } from '../../../state/actions';

interface ConfiguratorItemProps {
  category: string;
  name: string;
  price: number;
  selectMultiple: boolean;
  selectCallback?: () => void;
  isActiveCallback: (active: boolean) => void;
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
    if (selectMultiple) {
      dispatch(updateConfiguratorSelection(currentSelection.filter(item => item.name !== name).concat(item)));
    } else {
      dispatch(
        updateConfiguratorSelection(
          currentSelection.length
            ? currentSelection.filter(item => item.category !== category && item.name !== name).concat(item)
            : currentSelection.concat(item),
        ),
      );
    }

    isActiveCallback(true);
    selectCallback && selectCallback();
  };

  useEffect(() => {
    const selected = currentSelection.find(item => item.name === name) ? true : false;
    isActiveCallback(selected);
  }, [currentSelection]);

  return (
    <li className={props.classString ? props.classString : ''} onClick={updateSelection}>
      {children}
    </li>
  );
};

export default ConfiguratorItem;
