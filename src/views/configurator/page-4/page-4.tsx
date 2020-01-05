import React, { useState, useEffect } from 'react';
import style from './page-4.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import ConfiguratorItem from '../../../components/Configurator/Item/Item';
import SelectCard from '../../../components/Configurator/SelectCard/SelectCard';
import SelectCardGrid from '../../../components/Configurator/SelectCard/Grid/Grid';

const ConfiguratorPageThree: React.SFC = () => {
  const [activeSeat, setActiveSeat] = useState('');

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

  return (
    <div className={style.container}>
      <h2 className={style.header}>{content.title}</h2>
      <SelectCardGrid>
        {content.seat.map((seat, index) => (
          <ConfiguratorItem
            selectMultiple={false}
            key={`seat-${index}`}
            name={seat.name}
            price={seat.price}
            category={content.category}
            isActiveCallback={seat => setActiveSeat(seat)}
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
