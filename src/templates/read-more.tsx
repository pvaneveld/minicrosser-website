import React from 'react';
import LayoutHalfHero from '../components/Layouts/LayoutHalfHero/LayoutHalfHero';
import Layout from '../components/Layouts/Layout/Layout';
import Page from '../components/SmoothScroll/Page/Page';
import { graphql, useStaticQuery } from 'gatsby';
import ReadMoreImageContent from '../views/read-more/read-more-image-content';
import ReadMoreContent from '../views/read-more/read-more-content';

const ReadMorePage: React.SFC = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "read-more" } }) {
        frontmatter {
          title
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
      }
    }
  `);
  const { frontmatter: content } = query.markdownRemark;

  return (
    <Layout theme={{ headerDark: false, footerDark: true }}>
      <Page>
        <LayoutHalfHero
          headerSpacing={true}
          footerSpacing={true}
          remainSplitView={true}
          fluid={content.backgroundImage.childImageSharp.fluid}
        >
          <ReadMoreContent title={content.title} text={content.text} />
        </LayoutHalfHero>
      </Page>
    </Layout>
  );
};

export default ReadMorePage;
