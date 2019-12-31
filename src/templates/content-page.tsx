import React from 'react';
import Layout from '../components/Layouts/Layout/Layout';
import Page from '../components/SmoothScroll/Page/Page';
import ContentContainer from '../components/Layouts/ContentContainer/ContentContainer';
import ContentView from '../views/content/content';

import { graphql } from 'gatsby';

interface ContentPageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        text: string;
      };
    };
  };
}

const ContentPage: React.SFC<ContentPageProps> = ({ data }) => {
  const { frontmatter: content } = data.markdownRemark;
  return (
    <Layout theme={{ headerDark: true, footerDark: true }}>
      <Page>
        <ContentContainer headerSpacing={true} footerSpacing={true}>
          <ContentView text={content.text} title={content.title} />
        </ContentContainer>
      </Page>
    </Layout>
  );
};

export default ContentPage;

export const pageQuery = graphql`
  query ContentByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        text
      }
    }
  }
`;
