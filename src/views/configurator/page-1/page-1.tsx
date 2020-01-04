import React from 'react';
import style from './page-1.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import ContentContainer from '../../../components/Layouts/ContentContainer/ContentContainer';
import ConfiguratorItem from '../../../components/Configurator/Item/Item';
import ImageFluid from '../../../components/FluidImage/FluidImage';
import Markdown from '../../../components/Markdown/Markdown';
import Button from '../../../components/Buttons/Button/Button';
import { toCurrency } from '../../../helpers/toCurrency';

const ConfiguratorPageOne: React.SFC = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "configurator-one" } }) {
        frontmatter {
          title
          category
          models {
            name
            price
            image {
              childImageSharp {
                fluid(maxWidth: 350) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
          }
        }
      }
    }
  `);

  const { frontmatter: content } = query.markdownRemark;

  return (
    <ContentContainer classString={style.contentContainer} headerSpacing={true} footerSpacing={true}>
      <h1 className={style.pageTitle}>{content.title}</h1>
      <ul className={style.modelContainer}>
        {content.models.map((model, index) => {
          const { price, name, image, description } = model;
          const { fluid } = image.childImageSharp;

          return (
            <ConfiguratorItem
              classString={style.model}
              key={`model-${index}`}
              price={price}
              name={name}
              category={content.category}
              isActiveCallback={active => console.log(active)}
              selectMultiple={false}
            >
              <>
                <header className={style.header}>
                  <h2 className={style.modelName}>
                    <span>Model</span>
                    <span className={style.name}>{name}</span>
                  </h2>
                  <span className={style.modelPrice}>
                    <span>vanaf</span>
                    <span className={style.price}>{toCurrency(price, true)}</span>
                  </span>
                </header>

                <div className={style.image}>
                  <ImageFluid positionAbsolute={false} fluid={fluid} />
                </div>
                <Markdown>{description}</Markdown>
                <Button type="cta" classString={style.button}>
                  Selecteer
                </Button>
              </>
            </ConfiguratorItem>
          );
        })}
      </ul>
    </ContentContainer>
  );
};

export default ConfiguratorPageOne;
