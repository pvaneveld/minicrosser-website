import React, { useState, useEffect } from 'react';
import style from './page-3.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import ConfiguratorItem from '../../../components/Configurator/Item/Item';
import SelectCard from '../../../components/Configurator/SelectCard/SelectCard';
import SelectCardGrid from '../../../components/Configurator/SelectCard/Grid/Grid';
import { useSelector } from 'react-redux';
import initialSelect from '../../../helpers/configuratorSelectedHistory';

const ConfiguratorPageThree: React.SFC = () => {
  const [activeHandling, setActiveHandling] = useState([]);

  const currentSelection = useSelector((state: RootState) => state.configurator.selection);

  const selectHandler = (selectCallback, currentItems, item) => {
    item.selected
      ? selectCallback(currentItems.concat(item.name))
      : selectCallback(currentItems.filter(currentItem => item.name !== currentItem));
  };

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

  useEffect(() => {
    if (currentSelection.length) {
      initialSelect(currentSelection, content.category, false, setActiveHandling, ['']);
    }
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.header}>{content.title}</h1>
      <SelectCardGrid>
        {content.handling.map((handling, index) => (
          <ConfiguratorItem
            selectMultiple={true}
            key={`handling-${index}`}
            name={handling.name}
            price={handling.price}
            category={content.category}
            isActiveCallback={item => selectHandler(setActiveHandling, activeHandling, item)}
          >
            <SelectCard
              isActive={activeHandling.includes(handling.name)}
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
