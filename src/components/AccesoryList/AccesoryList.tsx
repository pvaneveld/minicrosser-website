import React from 'react';
import style from './AccesoryList.module.css';
import { FluidObject } from 'gatsby-image';
import FluidImage from '../FluidImage/FluidImage';
import Accordion from '../Accordion/Accordion';
import Button from '../Buttons/Button/Button';

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
          const { accesoryImage, title, description, buttonText } = accessory;
          return (
            <div className={style.accessory}>
              <div className={style.accessoryImage}>
                <FluidImage positionAbsolute={false} fluid={accesoryImage.childImageSharp.fluid} />
              </div>
              <Accordion classString={style.accordion} title={<span className={style.accessoryTitle}>{title}</span>}>
                <div className={style.accordionContent}>
                  {description}
                  <Button classString={style.button} link={true} target="/configureren">
                    {buttonText}
                  </Button>
                </div>
              </Accordion>
            </div>
          );
        })}
      </div>
    );
  }
};

export default AccesoryList;
