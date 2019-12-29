import LayoutHalfHero from '../../../components/Layouts/LayoutHalfHero/LayoutHalfHero';
import ContentContainer from '../../../components/Layouts/ContentContainer/ContentContainer';
import Markdown from '../../../components/Markdown/Markdown';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import style from './page-2.module.css';
import AccesoryList from '../../../components/AccesoryList/AccesoryList';

const AccessoriesPageTwo: React.SFC = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "accessories" } }) {
        frontmatter {
          accessoriesTwo {
            title
            intro
            accessories {
              title
              accesoryImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              subtitle
              buttonText
              description
            }
          }
        }
      }
    }
  `);

  console.log(query);

  const { accessoriesTwo: content } = query.markdownRemark.frontmatter;

  return (
    <ContentContainer classString={style.content}>
      <h1 className={style.header}>{content.title}</h1>
      <Markdown>{content.intro}</Markdown>
      <AccesoryList accessories={content.accessories} />
    </ContentContainer>
  );
};

export default AccessoriesPageTwo;
