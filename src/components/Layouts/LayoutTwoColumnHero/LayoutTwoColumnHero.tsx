import React, { ReactNode } from 'react';
import FluidImage from '../../FluidImage/FluidImage';
import ContentContainer from '../ContentContainer/ContentContainer';
import { FluidObject } from 'gatsby-image';
import style from './LayoutTwoColumnHero.module.css';

interface LayoutTwoColumnHeroProps {
  fluid: FluidObject;
  alt?: string;
  children?: ReactNode;
}

const LayoutTwoColumnHero: React.SFC<LayoutTwoColumnHeroProps> = props => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <FluidImage fluid={props.fluid} alt={props.alt} positionAbsolute={false} />
      </div>
      <div className={style.contentContainer}>{props.children}</div>
    </div>
  );
};

export default LayoutTwoColumnHero;
