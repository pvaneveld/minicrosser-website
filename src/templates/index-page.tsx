import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layouts/Layout/Layout';
import SmoothScrollContainer from '../components/SmoothScroll/SmoothScrollContainer/SmoothScrollContainer';
import Page from '../components/SmoothScroll/Page/Page';
import LayoutFullHero from '../components/Layouts/LayoutFullHero/LayoutFullHero';
import ScrollChevronDown from '../components/ScrollChevrons/ScrollChevronDown/ScrollChevronDown';
import PageOne from '../views/home/page-1/page-1';
import PageTwo from '../views/home/page-2/page-2';
import PageThree from '../views/home/page-3/page-3';

interface IndexPageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
    };
  };
}

const IndexPage: React.SFC<IndexPageProps> = () => {
  const pagesMock = [
    {
      id: 'home-1',
      title: 'screen 1',
    },
    {
      id: 'home-2',
      title: 'screen 2',
    },
    {
      id: 'home-3',
      title: 'screen 3',
    },
  ];

  const query = useStaticQuery(graphql`
    query {
      imageOne: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          homeOne {
            backgroundImage {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          homeTwo {
            backgroundImage {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          homeThree {
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
  `);

  return (
    <SmoothScrollContainer pages={pagesMock}>
      <Layout theme={{ headerDark: true, footerDark: true }}>
        <Page id="home-1">
          <LayoutFullHero fluid={query.imageOne.frontmatter.homeOne.backgroundImage.childImageSharp.fluid}>
            <PageOne />
          </LayoutFullHero>
          <ScrollChevronDown id="home-1" />
        </Page>
        <Page id="home-2">
          <LayoutFullHero fluid={query.imageOne.frontmatter.homeTwo.backgroundImage.childImageSharp.fluid}>
            <PageTwo />
          </LayoutFullHero>
          <ScrollChevronDown id="home-2" />
        </Page>
        <Page id="home-3">
          <LayoutFullHero fluid={query.imageOne.frontmatter.homeThree.backgroundImage.childImageSharp.fluid}>
            <PageThree />
          </LayoutFullHero>
        </Page>
      </Layout>
    </SmoothScrollContainer>
  );
};

export default IndexPage;
