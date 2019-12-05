import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layouts/Layout/Layout';
import SmoothScrollContainer from '../components/SmoothScroll/SmoothScrollContainer/SmoothScrollContainer';
import Page from '../components/SmoothScroll/Page/Page';
import ScrollChevronDown from '../components/ScrollChevrons/ScrollChevronDown/ScrollChevronDown';
import LayoutHalfHero from '../components/Layouts/LayoutHalfHero/LayoutHalfHero';

const pages = [
  {
    id: 'home-1',
    title: 'home-1',
  },
];

const IndexPage: React.SFC = () => {
  return (
    <SmoothScrollContainer pages={pages}>
      <Layout theme={{ headerDark: true, footerDark: true }}>
        <Page id={pages[0].id}>
          <ScrollChevronDown id={pages[0].id} />
        </Page>
      </Layout>
    </SmoothScrollContainer>
  );
};

export default IndexPage;
