import React from 'react';
import style from './page-3.module.css';
import Button from '../../../components/Buttons/Button/Button';
import { useStaticQuery, graphql } from 'gatsby';

const HomePageThree: React.SFC = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          homeThree {
            title
            buttonPrimary
          }
        }
      }
    }
  `);

  const { title, buttonPrimary } = query.markdownRemark.frontmatter.homeOne;

  return (
    <div className={style.container}>
      <h1 className={'jumbo'}>{title}</h1>
      <div className={style.buttonContainer}>
        <Button type="secondary" link={true}>
          {buttonPrimary}
        </Button>
      </div>
    </div>
  );
};

export default HomePageThree;
