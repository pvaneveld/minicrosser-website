import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import style from './FluidImage.module.css';

interface FluidImageProps {
  fluid: FluidObject;
  alt?: string;
}

const FluidImage: React.SFC<FluidImageProps> = props => {
  return <Img fluid={props.fluid} alt={props.alt ? props.alt : ''} className={style.image} />;
};

export default FluidImage;
