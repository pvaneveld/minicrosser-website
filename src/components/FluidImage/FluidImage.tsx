import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import style from './FluidImage.module.css';

interface FluidImageProps {
  fluid: FluidObject;
  positionAbsolute?: boolean;
  alt?: string;
}

const FluidImage: React.SFC<FluidImageProps> = props => {
  return (
    <Img
      fluid={props.fluid}
      alt={props.alt ? props.alt : ''}
      className={`${style.image}${props.positionAbsolute === false ? ` ${style.relative}` : ''}`}
    />
  );
};

export default FluidImage;
