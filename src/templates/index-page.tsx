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

const IndexPage: React.SFC = () => {
  const query = useStaticQuery(graphql`
    query {
      data: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          homeOne {
            title
            navigationTitle
            backgroundImage {
              childImageSharp {
                fluid(maxWidth: 2500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          homeTwo {
            title
            navigationTitle
            backgroundImage {
              childImageSharp {
                fluid(maxWidth: 2500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          homeThree {
            title
            navigationTitle
            backgroundImage {
              childImageSharp {
                fluid(maxWidth: 2500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const pages = [
    {
      id: 'home-1',
      title: query.data.frontmatter.homeOne.navigationTitle,
    },
    {
      id: 'home-2',
      title: query.data.frontmatter.homeTwo.navigationTitle,
    },
    {
      id: 'home-3',
      title: query.data.frontmatter.homeThree.navigationTitle,
    },
  ];

  return (
    <SmoothScrollContainer pages={pages}>
      <Layout theme={{ headerDark: false, footerDark: true }}>
        <Page id={pages[0].id}>
          <LayoutFullHero
            headerSpacing={true}
            fluid={query.data.frontmatter.homeOne.backgroundImage.childImageSharp.fluid}
          >
            <PageOne />
          </LayoutFullHero>
          <ScrollChevronDown id={pages[0].id} />
        </Page>
        <Page id={pages[1].id}>
          <LayoutFullHero fluid={query.data.frontmatter.homeTwo.backgroundImage.childImageSharp.fluid}>
            <PageTwo />
          </LayoutFullHero>
          <ScrollChevronDown id={pages[1].id} />
        </Page>
        <Page id={pages[2].id}>
          <LayoutFullHero
            footerSpacing={true}
            fluid={query.data.frontmatter.homeThree.backgroundImage.childImageSharp.fluid}
          >
            <PageThree />
          </LayoutFullHero>
        </Page>
      </Layout>
    </SmoothScrollContainer>
  );
};

export default IndexPage;
