import React from 'react';
import Button from '../../Buttons/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeConfiguratorPage } from '../../../state/actions';
import ArrowNext from '../../../icons/arrow_forward.svg';
import ArrowPrev from '../../../icons/arrow_back.svg';
import style from './PrevNext.module.css';

interface PrevNextProps {
  classString?: string;
}

const PrevNext: React.SFC<PrevNextProps> = props => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.configurator.page);
  const validUntil = useSelector((state: RootState) => state.configurator.validUntil);

  const nextClass = `${style.button} ${style.buttonNext}`;
  const prevClass = `${style.button} ${style.buttonPrev}`;

  return (
    <div className={`${style.container} ${props.classString ? props.classString : ''}`}>
      <Button classString={prevClass} clickHandler={() => dispatch(changeConfiguratorPage(currentPage - 1))} type="cta">
        <span>Vorige</span>
        <ArrowPrev />
      </Button>
      <Button
        disabled={currentPage >= validUntil}
        classString={nextClass}
        clickHandler={() => dispatch(changeConfiguratorPage(currentPage + 1))}
        type="cta"
      >
        <span>Volgende</span>
        <ArrowNext />
      </Button>
    </div>
  );
};

export default PrevNext;
