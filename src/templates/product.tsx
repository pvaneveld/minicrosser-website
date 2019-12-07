import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layouts/Layout/Layout';
import SmoothScrollContainer from '../components/SmoothScroll/SmoothScrollContainer/SmoothScrollContainer';
import Page from '../components/SmoothScroll/Page/Page';
import ScrollChevronDown from '../components/ScrollChevrons/ScrollChevronDown/ScrollChevronDown';
import LayoutHalfHero from '../components/Layouts/LayoutHalfHero/LayoutHalfHero';
import PageOneImage from '../views/product/page-1/page-1-image/page-1-image';
import PageOneContent from '../views/product/page-1/page-1-content/page-1-content';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

const pages = [
  {
    id: 'home-1',
    title: 'home-1',
  },
];

interface ProductPropTypes {
  data: {
    markdownRemark: {
      frontmatter: {
        productName: string;
        productOne: {
          backgroundImage: {
            childImageSharp: {
              fluid: FluidObject;
            };
          };
        };
      };
    };
  };
}

const Product: React.SFC<ProductPropTypes> = ({ data }) => {
  const { frontmatter: product } = data.markdownRemark;
  return (
    <SmoothScrollContainer pages={pages}>
      <Layout theme={{ headerDark: true, footerDark: true }}>
        <Page id={pages[0].id}>
          <LayoutHalfHero
            fluid={product.productOne.backgroundImage.childImageSharp.fluid}
            imageContent={<PageOneImage />}
          >
            <PageOneContent />
          </LayoutHalfHero>
          <ScrollChevronDown id={pages[0].id} />
        </Page>
      </Layout>
    </SmoothScrollContainer>
  );
};

export default Product;

export const pageQuery = graphql`
  query ProductByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        productName
        productOne {
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
