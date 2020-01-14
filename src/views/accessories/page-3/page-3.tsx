import ContentContainer from '../../../components/Layouts/ContentContainer/ContentContainer';
import Markdown from '../../../components/Markdown/Markdown';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import style from './page-3.module.css';
import AccesoryList from '../../../components/AccesoryList/AccesoryList';

const AccessoriesPageTwo: React.SFC = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "accessories" } }) {
        frontmatter {
          accessoriesThree {
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

  const { accessoriesThree: content } = query.markdownRemark.frontmatter;

  return (
    <ContentContainer footerSpacing={true} classString={style.content}>
      <h1 className={style.header}>{content.title}</h1>
      <div className={style.intro}>
        <Markdown>{content.intro}</Markdown>
      </div>
      <AccesoryList accessories={content.accessories} />
    </ContentContainer>
  );
};

export default AccessoriesPageTwo;
