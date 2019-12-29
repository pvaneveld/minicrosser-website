import React, { useEffect } from 'react';
import ContentContainer from '../components/Layouts/ContentContainer/ContentContainer';
import Layout from '../components/Layouts/Layout/Layout';
import Page from '../components/SmoothScroll/Page/Page';
import { useStaticQuery, graphql } from 'gatsby';

const ContactForm: React.SFC = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "accessories" } }) {
        frontmatter {
          accessoriesOne {
            navigationTitle
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
          accessoriesTwo {
            navigationTitle
            title
            intro
            accessories {
              title
              accesoryImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              subtitle
              buttonText
              description
            }
          }
          accessoriesThree {
            navigationTitle
            title
            intro
            accessories {
              title
              accesoryImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              subtitle
              buttonText
              description
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    console.log(query);
  }, []);

  return (
    <Layout theme={{ headerDark: true, footerDark: true }}>
      <Page background="gray">
        <ContentContainer headerSpacing={true} footerSpacing={true}></ContentContainer>
      </Page>
    </Layout>
  );
};

export default ContactForm;
