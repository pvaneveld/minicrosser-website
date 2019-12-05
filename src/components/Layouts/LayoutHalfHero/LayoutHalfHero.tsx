import React from 'react';
import FluidImage from '../../FluidImage/FluidImage';
import ContentContainer from '../ContentContainer/ContentContainer';
import { FluidObject } from 'gatsby-image';

interface LayoutFullHeroProps {
  fluid: FluidObject;
  alt?: string;
}

const LayoutFullHero: React.SFC<LayoutFullHeroProps> = props => {
  return (
    <div>
      <FluidImage fluid={props.fluid} alt={props.alt} />
      <ContentContainer>{props.children}</ContentContainer>
    </div>
  );
};

export default LayoutFullHero;
