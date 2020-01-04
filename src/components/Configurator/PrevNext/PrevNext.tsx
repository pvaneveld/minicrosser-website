import React from 'react';
import Button from '../../Buttons/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeConfiguratorPage } from '../../../state/actions';
import ArrowNext from '../../../icons/arrow_forward.svg';
import ArrowPrev from '../../../icons/arrow_back.svg';
import style from './PrevNext.module.css';

const PrevNext: React.SFC = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.configurator.page);

  const nextClass = `${style.button} ${style.buttonNext}`;
  const prevClass = `${style.button} ${style.buttonPrev}`;

  return (
    <>
      <Button classString={prevClass} clickHandler={() => dispatch(changeConfiguratorPage(currentPage - 1))} type="cta">
        Vorige
        <ArrowPrev />
      </Button>
      <Button classString={nextClass} clickHandler={() => dispatch(changeConfiguratorPage(currentPage + 1))} type="cta">
        Volgende
        <ArrowNext />
      </Button>
    </>
  );
};

export default PrevNext;
