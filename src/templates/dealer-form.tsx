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
  //   const query = useStaticQuery(graphql`
  //     query {
  //       data: markdownRemark(frontmatter: { templateKey: { eq: "dealer-form" } }) {
  //         frontmatter {

  //           }
  //         }
  //       }
  //   `);
  return (
    <Layout theme={{ headerDark: false, footerDark: true }}>
      <Page>
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, facilis consectetur corrupti mollitia
          ipsa, aut similique et dignissimos pariatur voluptatibus numquam temporibus labore. Voluptatum incidunt est
          quo, earum provident ex?
        </h1>
      </Page>
    </Layout>
  );
};

export default DealerForm;
