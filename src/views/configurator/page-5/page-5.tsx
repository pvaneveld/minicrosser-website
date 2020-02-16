import React, { useState, useEffect } from 'react';
import style from './page-5.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import ConfiguratorItem from '../../../components/Configurator/Item/Item';
import SelectCard from '../../../components/Configurator/SelectCard/SelectCard';
import SelectCardGrid from '../../../components/Configurator/SelectCard/Grid/Grid';
import { useSelector } from 'react-redux';
import initialSelect from '../../../helpers/configuratorSelectedHistory';

const ConfiguratorPageFive: React.SFC = () => {
  const [otherAccessories, setOtherAccessories] = useState([]);
  const currentSelection = useSelector((state: RootState) => state.configurator.selection);

  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "configurator-five" } }) {
        frontmatter {
          accessories {
            title
            category
            accessoriesList {
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
    }
  `);

  const { frontmatter: content } = query.markdownRemark;
  const { accessories } = content;

  const selectHandler = (selectCallback, currentItems, item) => {
    item.selected
      ? selectCallback(currentItems.concat(item.name))
      : selectCallback(currentItems.filter(currentItem => item.name !== currentItem));
  };

  useEffect(() => {
    if (currentSelection.length) {
      initialSelect(currentSelection, accessories.category, true, setOtherAccessories, otherAccessories);
    }
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.header}>{accessories.title}</h1>
      <SelectCardGrid>
        {accessories.accessoriesList.map((accessory, index) => (
          <ConfiguratorItem
            selectMultiple={true}
            key={`other-accessory-${index}`}
            name={accessory.name}
            price={accessory.price}
            category={accessories.category}
            isActiveCallback={item => selectHandler(setOtherAccessories, otherAccessories, item)}
          >
            <SelectCard
              isActive={otherAccessories.includes(accessory.name)}
              fluid={accessory.image.childImageSharp.fluid}
              name={accessory.name}
              price={accessory.price}
            />
          </ConfiguratorItem>
        ))}
      </SelectCardGrid>
    </div>
  );
};

export default ConfiguratorPageFive;
