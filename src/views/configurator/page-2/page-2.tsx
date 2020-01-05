import React, { useState, useEffect } from 'react';
import style from './page-2.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import ConfiguratorItem from '../../../components/Configurator/Item/Item';
import SelectCard from '../../../components/Configurator/SelectCard/SelectCard';
import SelectCardGrid from '../../../components/Configurator/SelectCard/Grid/Grid';

const ConfiguratorPageTwo: React.SFC = () => {
  const [activeColor, setActiveColor] = useState('');

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

  useEffect(() => console.log(activeColor), [activeColor]);

  return (
    <div className={style.container}>
      <h2 className={style.header}>{content.title}</h2>
      <SelectCardGrid>
        {content.colors.map((color, index) => (
          <ConfiguratorItem
            selectMultiple={false}
            key={`color-${index}`}
            name={color.name}
            price={300}
            category={content.category}
            isActiveCallback={color => setActiveColor(color)}
          >
            <SelectCard
              isActive={activeColor === color.name}
              fluid={color.image.childImageSharp.fluid}
              name={color.name}
              price={'300'}
            />
          </ConfiguratorItem>
        ))}
      </SelectCardGrid>
    </div>
  );
};

export default ConfiguratorPageTwo;
