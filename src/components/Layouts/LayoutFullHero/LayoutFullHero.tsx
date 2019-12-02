import React from 'react';
import style from './LayoutFullHero.module.css';
import FluidImage from '../../FluidImage/FluidImage';
import { FluidObject } from 'gatsby-image';

interface LayoutFullHeroProps {
  fluid: FluidObject;
  alt?: string;
}

const LayoutFullHero: React.SFC<LayoutFullHeroProps> = props => {
  return (
    <div>
      <FluidImage fluid={props.fluid} alt={props.alt} />
      <div className={style.content}>{props.children}</div>
    </div>
  );
};

export default LayoutFullHero;
