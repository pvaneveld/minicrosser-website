import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layouts/Layout/Layout';
import SmoothScrollContainer from '../components/SmoothScroll/SmoothScrollContainer/SmoothScrollContainer';
import Page from '../components/SmoothScroll/Page/Page';
import ScrollChevronDown from '../components/ScrollChevrons/ScrollChevronDown/ScrollChevronDown';
import LayoutHalfHero from '../components/Layouts/LayoutHalfHero/LayoutHalfHero';
import { graphql } from 'gatsby';

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
      };
    };
  };
}

const Product: React.SFC<ProductPropTypes> = ({ data }) => {
  const { markdownRemark: product } = data;
  return (
    <SmoothScrollContainer pages={pages}>
      <Layout theme={{ headerDark: true, footerDark: true }}>
        <Page id={pages[0].id}>
          <h1>{product.frontmatter.productName}</h1>
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
      }
    }
  }
`;
