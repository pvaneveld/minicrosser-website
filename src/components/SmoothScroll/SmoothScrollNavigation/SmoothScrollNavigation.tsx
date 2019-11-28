import React, { useState, useEffect } from 'react';
import styles from './SmoothScrollNavigation.module.css';

interface SmoothScrollNavigationProps {
  pages: { id: string; title: string; inView: boolean }[];
  clickHandler: (item: string) => void;
}

const SmoothScrollNavigation: React.SFC<SmoothScrollNavigationProps> = props => {
  return (
    <div className={styles.container}>
      {props.pages.map(item => {
        const [flashClass, setFlashClass] = useState('');

        useEffect(() => {
          setFlashClass(styles.flash);
          setTimeout(() => {
            setFlashClass('');
          }, 2000);
        }, [item]);

        return (
          <button
            onClick={(): void => props.clickHandler(item.id)}
            key={item.id}
            className={`${styles.item}${item.inView ? ` ${styles.active}` : ''}`}
          >
            <span className={item.inView ? flashClass : ''}>{item.title}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SmoothScrollNavigation;
