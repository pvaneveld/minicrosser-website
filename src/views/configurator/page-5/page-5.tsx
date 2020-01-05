import React, { useState, useEffect } from 'react';
import style from './page-5.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import ConfiguratorItem from '../../../components/Configurator/Item/Item';
import SelectCard from '../../../components/Configurator/SelectCard/SelectCard';
import SelectCardGrid from '../../../components/Configurator/SelectCard/Grid/Grid';

const ConfiguratorPageFive: React.SFC = () => {
  const [seatAccessories, setSeatAccessories] = useState([]);
  const [otherAccessories, setOtherAccessories] = useState([]);

  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "configurator-five" } }) {
        frontmatter {
          accessoriesSeat {
            title
            category
            accessoriesSeatList {
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
  const { accessoriesSeat } = content;
  const { accessories } = content;

  return (
    <div className={style.container}>
      <h2 className={style.header}>{accessories.title}</h2>
      <SelectCardGrid>
        {accessoriesSeat.accessoriesSeatList.map((accessory, index) => (
          <ConfiguratorItem
            selectMultiple={true}
            key={`seat-accessory-${index}`}
            name={accessory.name}
            price={accessory.price}
            category={accessoriesSeat.category}
            isActiveCallback={accessory =>
              setSeatAccessories(
                !seatAccessories.includes(accessory) ? seatAccessories.concat(accessory) : seatAccessories,
              )
            }
          >
            <SelectCard
              isActive={seatAccessories.includes(accessory.name)}
              fluid={accessory.image.childImageSharp.fluid}
              name={accessory.name}
              price={accessory.price}
            />
          </ConfiguratorItem>
        ))}
      </SelectCardGrid>

      <h2 className={style.header}>{accessoriesSeat.title}</h2>
      <SelectCardGrid>
        {accessories.accessoriesList.map((accessory, index) => (
          <ConfiguratorItem
            selectMultiple={true}
            key={`other-accessory-${index}`}
            name={accessory.name}
            price={accessory.price}
            category={accessories.category}
            isActiveCallback={accessory =>
              setOtherAccessories(
                !otherAccessories.includes(accessory) ? otherAccessories.concat(accessory) : otherAccessories,
              )
            }
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
