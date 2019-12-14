import React from 'react';
import style from './page-1.module.css';
import ButtonGroup from '../../../components/Buttons/ButtonGroup/ButtonGroup';
import { useStaticQuery, graphql } from 'gatsby';

const HomepageOne: React.SFC = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          homeOne {
            title
            buttons {
              buttonPrimary
              buttonSecondary
            }
          }
        }
      }
    }
  `);

  const { title, buttons } = query.markdownRemark.frontmatter.homeOne;
  const { buttonPrimary, buttonSecondary } = buttons;

  const buttonGroup = [
    {
      children: buttonPrimary,
      link: true,
    },
    {
      type: 'secondary' as const,
      link: true,
      children: buttonSecondary,
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
