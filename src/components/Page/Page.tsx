import React from 'react';
import { ReactNode } from 'react';
import style from './Page.module.css';
import mockImage from '../../img/mock-image.jpg';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

interface PageProps {
  children?: ReactNode;
  id: string;
  firstPage: boolean;
  lastPage: boolean;
  data: {
    file: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}

const Page: React.SFC<PageProps> = props => {
  const pageQuery = useStaticQuery(graphql`
    query {
      file(absolutePath: { regex: "/mock-image/" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div id={props.id} className={style.page}>
      <Img fluid={pageQuery.file.childImageSharp.fluid} alt="" className={style.image} />
      <div
        className={`${style.pageContent} ${props.firstPage ? style.firstPage : ''} ${
          props.lastPage ? style.lastPage : ''
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Page;
