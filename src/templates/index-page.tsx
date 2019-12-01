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
      imageOne: file(absolutePath: { regex: "/mock-image-1/" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(absolutePath: { regex: "/mock-image-2/" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(absolutePath: { regex: "/mock-image-3/" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      content: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        html
        frontmatter {
          homeOne {
            'background-image'
          }
        }
      }
    }
  `);

  console.log(query.content);

  return (
    <SmoothScrollContainer pages={pagesMock}>
      <Layout theme={{ headerDark: true, footerDark: true }}>
        <Page id="home-1">
          <LayoutFullHero fluid={query.imageOne.childImageSharp.fluid}>
            <PageOne />
          </LayoutFullHero>
          <ScrollChevronDown id="home-1" />
        </Page>
        <Page id="home-2">
          <LayoutFullHero fluid={query.imageTwo.childImageSharp.fluid}>
            <PageTwo />
          </LayoutFullHero>
          <ScrollChevronDown id="home-2" />
        </Page>
        <Page id="home-3">
          <LayoutFullHero fluid={query.imageThree.childImageSharp.fluid}>
            <PageThree />
          </LayoutFullHero>
        </Page>
      </Layout>
    </SmoothScrollContainer>
  );
};

export default IndexPage;
