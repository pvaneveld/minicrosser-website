import React from 'react';
import style from './SelectCard.module.css';
import FluidImage from '../../FluidImage/FluidImage';
import { FluidObject } from 'gatsby-image';
import { toCurrency } from '../../../helpers/toCurrency';

interface SelectCardProps {
  isActive?: boolean;
  fluid: FluidObject;
  name: string;
  price?: string;
}
const SelectCard: React.SFC<SelectCardProps> = props => {
  return (
    <button className={`${style.selectCard} ${props.isActive ? style.isActive : ''}`}>
      <div className={style.image}>
        <FluidImage positionAbsolute={false} fluid={props.fluid} />
      </div>
      <span className={style.name}>{props.name}</span>
      {props.price && <span className={style.price}>{toCurrency(parseFloat(props.price))}</span>}
    </button>
  );
};

export default SelectCard;
