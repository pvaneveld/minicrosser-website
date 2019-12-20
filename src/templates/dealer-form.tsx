import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layouts/Layout/Layout';
import Page from '../components/SmoothScroll/Page/Page';

interface DealerFormProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
    };
  };
}

const DealerForm: React.SFC<DealerFormProps> = () => {
  const query = useStaticQuery(graphql`
    query {
      data: markdownRemark(frontmatter: { templateKey: { eq: "dealer-form" } }) {
        frontmatter {
          title
        }
      }
    }
  `);
  return (
    <Layout theme={{ headerDark: false, footerDark: true }}>
      <Page>
        <h1>{query.title}</h1>
      </Page>
    </Layout>
  );
};

export default DealerForm;
