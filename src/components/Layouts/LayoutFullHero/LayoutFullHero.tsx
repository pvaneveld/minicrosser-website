import React from 'react';
import FluidImage from '../../FluidImage/FluidImage';
import ContentContainer from '../ContentContainer/ContentContainer';
import { FluidObject } from 'gatsby-image';

interface LayoutFullHeroProps {
  fluid: FluidObject;
  alt?: string;
  headerSpacing?: boolean;
  footerSpacing?: boolean;
}

const LayoutFullHero: React.SFC<LayoutFullHeroProps> = props => {
  return (
    <div>
      <FluidImage fluid={props.fluid} alt={props.alt} />
      <ContentContainer footerSpacing={props.footerSpacing} headerSpacing={props.headerSpacing}>
        {props.children}
      </ContentContainer>
    </div>
  );
};

export default LayoutFullHero;
