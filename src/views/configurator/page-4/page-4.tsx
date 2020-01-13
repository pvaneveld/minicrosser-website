import React, { useState, useEffect } from 'react';
import style from './page-4.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import ConfiguratorItem from '../../../components/Configurator/Item/Item';
import SelectCard from '../../../components/Configurator/SelectCard/SelectCard';
import SelectCardGrid from '../../../components/Configurator/SelectCard/Grid/Grid';
import initialSelect from '../../../helpers/configuratorSelectedHistory';
import { useSelector } from 'react-redux';

const ConfiguratorPageThree: React.SFC = () => {
  const [activeSeat, setActiveSeat] = useState('');

  const currentSelection = useSelector((state: RootState) => state.configurator.selection);

  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "configurator-four" } }) {
        frontmatter {
          title
          category
          seat {
            name
            price
            image {
              childImageSharp {
                fluid(maxWidth: 350) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const { frontmatter: content } = query.markdownRemark;

  useEffect(() => {
    if (currentSelection.length) {
      initialSelect(currentSelection, content.category, false, setActiveSeat, ['']);
    }
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.header}>{content.title}</h1>
      <SelectCardGrid>
        {content.seat.map((seat, index) => (
          <ConfiguratorItem
            selectMultiple={false}
            key={`seat-${index}`}
            name={seat.name}
            price={seat.price}
            category={content.category}
            isActiveCallback={seat => (seat.selected ? setActiveSeat(seat.name) : setActiveSeat(''))}
          >
            <SelectCard
              isActive={activeSeat === seat.name}
              fluid={seat.image.childImageSharp.fluid}
              name={seat.name}
              price={seat.price}
            />
          </ConfiguratorItem>
        ))}
      </SelectCardGrid>
    </div>
  );
};

export default ConfiguratorPageThree;
