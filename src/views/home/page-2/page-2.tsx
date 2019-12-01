import React from 'react';
import style from './page-2.module.css';
import ButtonGroup from '../../../components/Buttons/ButtonGroup/ButtonGroup';

const PageTwo: React.SFC = () => {
  const buttonGroup = [
    {
      children: 'Proefrit' as const,
    },
    {
      type: 'secondary' as const,
      children: 'Vind uw dealer',
    },
  ];

  return (
    <div className={style.container}>
      <h1 className={'jumbo'}>Ontdek Minicrosser</h1>
      <div className={style.buttonContainer}>
        <ButtonGroup buttons={buttonGroup} />
      </div>
    </div>
  );
};

export default PageTwo;
