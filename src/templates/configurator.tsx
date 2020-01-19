import React, { useEffect } from 'react';
import Layout from '../components/Layouts/Layout/Layout';
import Page from '../components/SmoothScroll/Page/Page';
import { useSelector, useDispatch } from 'react-redux';
import ConfiguratorPageOne from '../views/configurator/page-1/page-1';
import ConfiguratorLayout from '../components/Configurator/Layout/Layout';
import Sidebar from '../components/Configurator/Sidebar/Sidebar';
import ConfiguratorPageTwo from '../views/configurator/page-2/page-2';
import ConfiguratorPageThree from '../views/configurator/page-3/page-3';
import ConfiguratorPageFour from '../views/configurator/page-4/page-4';
import ConfiguratorPageFive from '../views/configurator/page-5/page-5';
import { useStaticQuery, graphql } from 'gatsby';
import { updateValidPages } from '../state/actions';
import ConfiguratorForm from '../views/configurator/configurator-form/configurator-form';
import ResetButton from '../components/Configurator/ResetButton/ResetButton';

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
      four: markdownRemark(frontmatter: { templateKey: { eq: "configurator-four" } }) {
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
        if (currentPage > 4) {
          acc = 6;
        } else if (index + 2 > acc) {
          acc = index + 2;
        } else if (acc < currentPage) {
          acc = currentPage;
        }

        return acc;
      }, 0);

      dispatch(updateValidPages(validUntil));
    } else {
      dispatch(updateValidPages(1));
    }
  };

  useEffect(() => {
    updateValidSteps();
  }, [currentSelection, currentPage]);

  return (
    <Layout theme={{ headerDark: true, footerDark: true }} configurator={true}>
      <Page>
        {currentPage === 1 && <ConfiguratorPageOne />}
        {currentPage > 1 && (
          <ConfiguratorLayout sidebar={<Sidebar />} resetButton={currentPage === 6 ? <ResetButton /> : null}>
            {currentPage === 2 && <ConfiguratorPageTwo />}
            {currentPage === 3 && <ConfiguratorPageThree />}
            {currentPage === 4 && <ConfiguratorPageFour />}
            {currentPage === 5 && <ConfiguratorPageFive />}
            {currentPage === 6 && <ConfiguratorForm />}
          </ConfiguratorLayout>
        )}
      </Page>
    </Layout>
  );
};

export default Configurator;
