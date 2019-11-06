import React from 'react';
import { graphql } from 'gatsby';
import styled, { DefaultTheme } from 'styled-components';
import Layout from '../components/Layout';

interface IndexPageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
    };
  };
  theme: DefaultTheme;
}

const IndexPage: React.SFC<IndexPageProps> = props => {
  const content = props.data.markdownRemark.frontmatter;
  const { title } = content;

  const Container = styled.div`
    margin: 3rem auto;
    max-width: ${props.theme.textXS};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  return (
    <Layout>
      <Container>
        <h1>{title}</h1>
      </Container>
    </Layout>
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
