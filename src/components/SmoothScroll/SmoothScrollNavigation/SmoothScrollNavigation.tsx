import React from 'react';
import styles from './SmoothScrollNavigation.module.css';

interface SmoothScrollNavigationProps {
  pages: { id: string; title: string; inView: boolean }[];
}

const SmoothScrollNavigation: React.SFC<SmoothScrollNavigationProps> = props => {
  console.log(props.pages);
  return (
    <div className={styles.container}>
      {props.pages.map(item => (
        <button key={item.id} className={styles.item}>
          <span>
            {item.title} | {item.inView ? 'in beeld' : 'niet in beeld'}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SmoothScrollNavigation;
