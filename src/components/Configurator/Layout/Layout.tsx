import React, { ReactNode } from 'react';
import style from './Layout.module.css';
import ContentContainer from '../../Layouts/ContentContainer/ContentContainer';
import PrevNext from '../PrevNext/PrevNext';
import Button from '../../Buttons/Button/Button';

interface ConfiguratorLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  resetButton?: ReactNode;
}
const ConfiguratorLayout: React.SFC<ConfiguratorLayoutProps> = props => {
  return (
    <ContentContainer headerSpacing={true} footerSpacing={true}>
      <div className={style.grid}>
        <div className={style.content}>
          {props.children} {!props.resetButton && <PrevNext />}
        </div>
        <div className={style.sidebar}>
          <div className={style.configuration}>{props.sidebar}</div>
          <div className={style.reset}>{props.resetButton}</div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default ConfiguratorLayout;
