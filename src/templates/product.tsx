import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layouts/Layout/Layout';
import SmoothScrollContainer from '../components/SmoothScroll/SmoothScrollContainer/SmoothScrollContainer';
import Page from '../components/SmoothScroll/Page/Page';
import ScrollChevronDown from '../components/ScrollChevrons/ScrollChevronDown/ScrollChevronDown';
import LayoutHalfHero from '../components/Layouts/LayoutHalfHero/LayoutHalfHero';
import LayoutTwoColumnHero from '../components/Layouts/LayoutTwoColumnHero/LayoutTwoColumnHero';
import PageOneImage from '../views/product/page-1/page-1-image/page-1-image';
import PageOneContent from '../views/product/page-1/page-1-content/page-1-content';
import PageTwo from '../views/product/page-2/page-2';
import PageThree from '../views/product/page-3/page-3';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

const pages = [
  {
    id: 'product-1',
    title: 'product-1',
  },
  {
    id: 'product-2',
    title: 'product-2',
  },
  {
    id: 'product-3',
    title: 'product-3',
  },
];

export type keyFeatures = { title: string; description: string }[];
export type specifications = { title: string; description: string }[];
export type title = { subtitle: string; mainTitle: string };

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
          keyFeatures: keyFeatures;
          title: title;
          text: string;
          buttonText: string;
        };

        productTwo: {
          backgroundImage: {
            childImageSharp: {
              fluid: FluidObject;
            };
          };
          title: title;
          specifications: specifications;
        };
      };
    };
  };
}

const Product: React.SFC<ProductPropTypes> = ({ data }) => {
  const { frontmatter: product } = data.markdownRemark;
  return (
    <SmoothScrollContainer pages={pages}>
      <Layout theme={{ headerDark: false, footerDark: true }}>
        <Page id={pages[0].id}>
          <LayoutHalfHero
            fluid={product.productOne.backgroundImage.childImageSharp.fluid}
            imageContent={
              <PageOneImage keyFeatures={product.productOne.keyFeatures} buttonText={product.productOne.buttonText} />
            }
          >
            <PageOneContent
              title={product.productOne.title}
              text={product.productOne.text}
              buttonText={product.productOne.buttonText}
            />
          </LayoutHalfHero>
          <ScrollChevronDown id={pages[0].id} />
        </Page>
        <Page id={pages[1].id}>
          <LayoutTwoColumnHero fluid={product.productTwo.backgroundImage.childImageSharp.fluid}>
            <PageTwo title={product.productTwo.title} specifications={product.productTwo.specifications} />
          </LayoutTwoColumnHero>
        </Page>
        <Page id={pages[2].id}>
          <PageThree />
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
          keyFeatures {
            title
            description
          }
          title {
            subtitle
            mainTitle
          }
          text
          buttonText
        }
        productTwo {
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title {
            subtitle
            mainTitle
          }
          specifications {
            title
            description
          }
        }
      }
    }
  }
`;
