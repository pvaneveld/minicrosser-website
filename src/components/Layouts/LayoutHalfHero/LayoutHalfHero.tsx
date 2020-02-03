import React, { ReactNode } from 'react';
import FluidImage from '../../FluidImage/FluidImage';
import ContentContainer from '../ContentContainer/ContentContainer';
import style from './LayoutHalfHero.module.css';
import { FluidObject } from 'gatsby-image';
import HeaderFooterSpacing from '../../Layouts/HeaderFooterSpacing/HeaderFooterSpacing';

interface LayoutFullHeroProps {
  fluid: FluidObject;
  children?: ReactNode;
  imageContent?: ReactNode;
  alt?: string;
  headerSpacing?: boolean;
  remainSplitView?: boolean;
  footerSpacing?: boolean;
}

const LayoutFullHero: React.SFC<LayoutFullHeroProps> = props => {
  const inlineStyle = {
    gridTemplateRows: props.remainSplitView ? '60% auto' : '',
  };

  return (
    <>
      <div style={inlineStyle} className={style.halfHeroContainer}>
        <div className={style.imageContainer}>
          <FluidImage fluid={props.fluid} alt={props.alt} positionAbsolute={false} />
          <div className={style.imageContent}>
            <ContentContainer headerSpacing={props.headerSpacing}>{props.imageContent}</ContentContainer>
          </div>
        </div>
        <ContentContainer>{props.children}</ContentContainer>
      </div>
      {props.footerSpacing && <HeaderFooterSpacing footerSpacing={true} />}
    </>
  );
};

export default LayoutFullHero;
