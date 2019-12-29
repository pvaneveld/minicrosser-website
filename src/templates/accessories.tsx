import React, { useEffect } from 'react';
import Layout from '../components/Layouts/Layout/Layout';
import Page from '../components/SmoothScroll/Page/Page';
import { useStaticQuery, graphql } from 'gatsby';
import SmoothScrollContainer from '../components/SmoothScroll/SmoothScrollContainer/SmoothScrollContainer';
import AccessoriesPageOne from '../views/accessories/page-1/page-1';
import AccessoriesPageTwo from '../views/accessories/page-2/page-2';

const ContactForm: React.SFC = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "accessories" } }) {
        frontmatter {
          accessoriesOne {
            navigationTitle
          }
          accessoriesTwo {
            navigationTitle
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

  const { frontmatter: content } = query.markdownRemark;

  const pages = [
    {
      id: 'accesories-1',
      title: content.accessoriesOne.navigationTitle,
    },
    {
      id: 'accesories-2',
      title: content.accessoriesTwo.navigationTitle,
    },
    {
      id: 'accesories-3',
      title: content.accessoriesThree.navigationTitle,
    },
  ];

  return (
    <SmoothScrollContainer pages={pages}>
      <Layout theme={{ headerDark: true, footerDark: false }}>
        <Page id={pages[0].id}>
          <AccessoriesPageOne />
        </Page>
        <Page id={pages[1].id} background="black">
          <AccessoriesPageTwo />
        </Page>
        <Page id={pages[2].id}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quaerat sed unde quis sint ab rerum error
          dolorum culpa voluptate provident ad, nisi fugiat ut vel incidunt consequuntur! Consectetur, ratione!
        </Page>
      </Layout>
    </SmoothScrollContainer>
  );
};

export default ContactForm;
