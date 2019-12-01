import React from 'react';
import style from './page-1.module.css';
import ButtonGroup from '../../../components/Buttons/ButtonGroup/ButtonGroup';

const pageOne: React.SFC = () => {
  const buttonGroup = [
    {
      children: 'Proefrit' as const,
    },
    {
      type: 'secondary' as const,
      children: 'Configureren',
    },
  ];

  return (
    <div className={style.container}>
      <h1 className={'jumbo'}>Minicrosser X</h1>
      <div className={style.buttonContainer}>
        <ButtonGroup buttons={buttonGroup} />
      </div>
    </div>
  );
};

export default pageOne;
