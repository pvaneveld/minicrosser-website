import React, { useState, useEffect } from 'react';
import style from './page-3.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import ConfiguratorItem from '../../../components/Configurator/Item/Item';
import SelectCard from '../../../components/Configurator/SelectCard/SelectCard';
import SelectCardGrid from '../../../components/Configurator/SelectCard/Grid/Grid';

const ConfiguratorPageThree: React.SFC = () => {
  const [activeHandling, setActiveHandling] = useState('');

  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "configurator-three" } }) {
        frontmatter {
          title
          category
          handling {
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
        {content.handling.map((handling, index) => (
          <ConfiguratorItem
            selectMultiple={false}
            key={`handling-${index}`}
            name={handling.name}
            price={handling.price}
            category={content.category}
            isActiveCallback={handling =>
              handling.selected ? setActiveHandling(handling.name) : setActiveHandling('')
            }
          >
            <SelectCard
              isActive={activeHandling === handling.name}
              fluid={handling.image.childImageSharp.fluid}
              name={handling.name}
              price={handling.price}
            />
          </ConfiguratorItem>
        ))}
      </SelectCardGrid>
    </div>
  );
};

export default ConfiguratorPageThree;
