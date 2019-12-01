import React from 'react';
import style from './page-3.module.css';
import Button from '../../../components/Buttons/Button/Button';

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
      <h1 className={'jumbo'}>Dit is minicrosser</h1>
      <div className={style.buttonContainer}>
        <Button type="secondary">Lees meer</Button>
      </div>
    </div>
  );
};

export default PageTwo;
