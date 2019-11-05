import React from 'react';
import { graphql } from 'gatsby';

interface IndexPageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
    };
  };
}

const IndexPage: React.SFC<IndexPageProps> = props => {
  const content = props.data.markdownRemark.frontmatter;
  const { title } = content;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
