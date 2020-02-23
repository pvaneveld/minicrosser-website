import LayoutHalfHero from '../../../components/Layouts/LayoutHalfHero/LayoutHalfHero';
import ContentContainer from '../../../components/Layouts/ContentContainer/ContentContainer';
import Markdown from '../../../components/Markdown/Markdown';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import style from './page-1.module.css';

const AccessoriesPageOne: React.SFC = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "accessories" } }) {
        frontmatter {
          accessoriesOne {
            title
            backgroundImage {
              childImageSharp {
                fluid(maxWidth: 2500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  `);

  const { accessoriesOne: content } = query.markdownRemark.frontmatter;

  return (
    <LayoutHalfHero
      classNames={style.layoutHalfHero}
      customRowHeight="seventy"
      headerSpacing={true}
      fluid={content.backgroundImage.childImageSharp.fluid}
      remainSplitView={true}
    >
      <ContentContainer classString={style.contentContainer}>
        <h1>{content.title}</h1>
        <Markdown>{content.text}</Markdown>
      </ContentContainer>
    </LayoutHalfHero>
  );
};

export default AccessoriesPageOne;
