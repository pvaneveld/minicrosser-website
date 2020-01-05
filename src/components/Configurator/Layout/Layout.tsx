import React, { ReactNode } from 'react';
import style from './Layout.module.css';
import ContentContainer from '../../Layouts/ContentContainer/ContentContainer';
import PrevNext from '../PrevNext/PrevNext';

interface ConfiguratorLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}
const ConfiguratorLayout: React.SFC<ConfiguratorLayoutProps> = props => {
  return (
    <ContentContainer headerSpacing={true} footerSpacing={true}>
      <div className={style.grid}>
        <div className={style.content}>
          {props.children} <PrevNext />
        </div>
        <div className={style.sidebar}>{props.sidebar}</div>
      </div>
    </ContentContainer>
  );
};

export default ConfiguratorLayout;
