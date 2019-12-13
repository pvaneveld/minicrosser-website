import React from 'react';
import style from './page-1.module.css';
import ButtonGroup from '../../../components/Buttons/ButtonGroup/ButtonGroup';
import { useStaticQuery, graphql } from 'gatsby';

const HomepageOne: React.SFC = () => {
  const query = useStaticQuery(graphql`
    query Content {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          homeOne {
            title
            buttonTextPrimary
            buttonTextSecondary
          }
        }
      }
    }
  `);

  const { title, buttonTextPrimary, buttonTextSecondary } = query.markdownRemark.frontmatter.homeOne;

  const buttonGroup = [
    {
      children: buttonTextPrimary,
    },
    {
      type: 'secondary' as const,
      children: buttonTextSecondary,
    },
  ];

  return (
    <div className={style.container}>
      <h1 className={'jumbo'}>{title}</h1>
      <div className={style.buttonContainer}>
        <ButtonGroup buttons={buttonGroup} />
      </div>
    </div>
  );
};

export default HomepageOne;
