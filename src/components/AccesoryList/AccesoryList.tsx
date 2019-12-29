import React from 'react';
import style from './AccesoryList.module.css';
import { FluidObject } from 'gatsby-image';
import FluidImage from '../FluidImage/FluidImage';

interface AccessoryListProps {
  accessories: {
    title: string;
    accesoryImage: { childImageSharp: { fluid: FluidObject } };
    subitle?: string;
    buttonText: string;
    description: string;
  }[];
}

const AccesoryList: React.SFC<AccessoryListProps> = props => {
  {
    return (
      <div className={style.container}>
        {props.accessories.map(accessory => {
          const { accesoryImage, title } = accessory;
          return (
            <div className={style.accessory}>
              <div className={style.accessoryImage}>
                <FluidImage positionAbsolute={false} fluid={accesoryImage.childImageSharp.fluid} alt={title} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default AccesoryList;
