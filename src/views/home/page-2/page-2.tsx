import React from 'react';
import style from './page-2.module.css';
import ButtonGroup from '../../../components/Buttons/ButtonGroup/ButtonGroup';
import { useStaticQuery, graphql } from 'gatsby';

const HomePageTwo: React.SFC = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          homeTwo {
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

  const { title, buttons } = query.markdownRemark.frontmatter.homeTwo;
  const { buttonPrimary, buttonSecondary } = buttons;

  const buttonGroup = [
    {
      children: buttonPrimary,
      link: true,
      target: '/',
    },
    {
      type: 'secondary' as const,
      link: true,
      children: buttonSecondary,
      target: '/',
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

export default HomePageTwo;
