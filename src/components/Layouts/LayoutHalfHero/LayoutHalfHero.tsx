import React, { ReactNode } from 'react';
import FluidImage from '../../FluidImage/FluidImage';
import ContentContainer from '../ContentContainer/ContentContainer';
import style from './LayoutHalfHero.module.css';
import { FluidObject } from 'gatsby-image';

interface LayoutFullHeroProps {
  fluid: FluidObject;
  children?: ReactNode;
  imageContent?: ReactNode;
  alt?: string;
  headerSpacing?: boolean;
}

const LayoutFullHero: React.SFC<LayoutFullHeroProps> = props => {
  return (
    <div className={style.halfHeroContainer}>
      <div className={style.imageContainer}>
        <FluidImage fluid={props.fluid} alt={props.alt} positionAbsolute={false} />
        <div className={style.imageContent}>
          <ContentContainer headerSpacing={props.headerSpacing}>{props.imageContent}</ContentContainer>
        </div>
      </div>
      <ContentContainer>{props.children}</ContentContainer>
    </div>
  );
};

export default LayoutFullHero;
