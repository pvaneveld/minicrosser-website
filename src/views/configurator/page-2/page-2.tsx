import React, { useState, useEffect } from 'react';
import style from './page-2.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import ConfiguratorItem from '../../../components/Configurator/Item/Item';
import SelectCard from '../../../components/Configurator/SelectCard/SelectCard';
import SelectCardGrid from '../../../components/Configurator/SelectCard/Grid/Grid';
import { useSelector } from 'react-redux';
import initialSelect from '../../../helpers/configuratorSelectedHistory';

const ConfiguratorPageTwo: React.SFC = () => {
  const [activeColor, setActiveColor] = useState('');

  const currentSelection = useSelector((state: RootState) => state.configurator.selection);

  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "configurator-two" } }) {
        frontmatter {
          title
          category
          colors {
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
      initialSelect(currentSelection, content.category, false, setActiveColor, ['']);
    }
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.header}>{content.title}</h1>
      <SelectCardGrid>
        {content.colors.map((color, index) => (
          <ConfiguratorItem
            selectMultiple={false}
            key={`color-${index}`}
            name={color.name}
            price={color.price}
            category={content.category}
            isActiveCallback={color => (color.selected ? setActiveColor(color.name) : setActiveColor(''))}
          >
            <SelectCard
              isActive={activeColor === color.name}
              fluid={color.image.childImageSharp.fluid}
              name={color.name}
              price={color.price}
            />
          </ConfiguratorItem>
        ))}
      </SelectCardGrid>
    </div>
  );
};

export default ConfiguratorPageTwo;
