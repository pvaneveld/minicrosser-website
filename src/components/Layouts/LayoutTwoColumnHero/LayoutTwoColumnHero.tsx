import React, { ReactNode } from 'react';
import FluidImage from '../../FluidImage/FluidImage';
import { FluidObject } from 'gatsby-image';
import style from './LayoutTwoColumnHero.module.css';

interface LayoutTwoColumnHeroProps {
  fluid: FluidObject;
  alt?: string;
  children?: ReactNode;
  background?: string;
  imageRight?: boolean;
  aspectRatioHorizontal?: boolean;
}

const LayoutTwoColumnHero: React.SFC<LayoutTwoColumnHeroProps> = props => {
  const { background, imageRight } = props;

  const backgroundClass = background && background === 'white' ? style.backgroundWhite : '';
  const imageRightClass = imageRight ? style.imageRight : '';
  const aspectRatioHorizontal = imageRight ? style.imageHorizontal : '';
  return (
    <div className={`${style.container} ${backgroundClass} ${imageRightClass} ${aspectRatioHorizontal}`}>
      <div className={style.grid}>
        <div className={style.imageContainer}>
          <div className={style.image}>
            <FluidImage fluid={props.fluid} alt={props.alt} positionAbsolute={false} />
          </div>
        </div>
        <div className={style.contentContainer}>{props.children}</div>
      </div>
    </div>
  );
};

export default LayoutTwoColumnHero;
