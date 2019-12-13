import React from 'react';
import style from './page-3.module.css';
import Button from '../../../components/Buttons/Button/Button';

const HomePageThree: React.SFC = () => {
  return (
    <div className={style.container}>
      <h1 className={'jumbo'}>Dit is minicrosser</h1>
      <div className={style.buttonContainer}>
        <Button type="secondary">Lees meer</Button>
      </div>
    </div>
  );
};

export default HomePageThree;
