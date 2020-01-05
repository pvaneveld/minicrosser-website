import React, { useEffect } from 'react';
import Layout from '../components/Layouts/Layout/Layout';
import Page from '../components/SmoothScroll/Page/Page';
import { useSelector, useDispatch } from 'react-redux';
import ConfiguratorPageOne from '../views/configurator/page-1/page-1';
import ConfiguratorLayout from '../components/Configurator/Layout/Layout';
import Sidebar from '../components/Configurator/Sidebar/Sidebar';
import ConfiguratorPageTwo from '../views/configurator/page-2/page-2';
import ConfiguratorPageThree from '../views/configurator/page-3/page-3';
import { useStaticQuery, graphql } from 'gatsby';
import { updateValidPages } from '../state/actions';

const Configurator: React.SFC = () => {
  const currentPage = useSelector((state: RootState) => state.configurator.page);

  const currentSelection = useSelector((state: RootState) => state.configurator.selection);

  const dispatch = useDispatch();

  const categories = useStaticQuery(graphql`
    query {
      one: markdownRemark(frontmatter: { templateKey: { eq: "configurator-one" } }) {
        frontmatter {
          category
        }
      }
      two: markdownRemark(frontmatter: { templateKey: { eq: "configurator-two" } }) {
        frontmatter {
          category
        }
      }
      three: markdownRemark(frontmatter: { templateKey: { eq: "configurator-three" } }) {
        frontmatter {
          category
        }
      }
    }
  `);

  const updateValidSteps = () => {
    if (currentSelection.length) {
      const flattenedCategories: string[] = Object.values(categories).map(
        (item: { frontmatter: { category: string } }) => item.frontmatter.category,
      );

      const validUntil: number = currentSelection.reduce((acc, curr) => {
        const index = flattenedCategories.indexOf(curr.category);
        if (index + 2 > acc) {
          return index + 2;
        }

        if (currentPage === 5) {
          return 6;
        }

        return currentPage;
      }, 0);

      dispatch(updateValidPages(validUntil));
    }
  };

  useEffect(() => {
    updateValidSteps();
  }, [currentSelection]);

  return (
    <Layout theme={{ headerDark: true, footerDark: true }} configurator={true}>
      <Page>
        {currentPage === 1 && <ConfiguratorPageOne />}
        {currentPage > 1 && (
          <ConfiguratorLayout sidebar={<Sidebar />}>
            {currentPage === 2 && <ConfiguratorPageTwo />}
            {currentPage === 3 && <ConfiguratorPageThree />}
          </ConfiguratorLayout>
        )}
      </Page>
    </Layout>
  );
};

export default Configurator;
