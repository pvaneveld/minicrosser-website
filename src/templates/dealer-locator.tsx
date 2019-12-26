import React from 'react';
import ContentContainer from '../components/Layouts/ContentContainer/ContentContainer';
import Layout from '../components/Layouts/Layout/Layout';
import Page from '../components/SmoothScroll/Page/Page';
import DealerLocatorView from '../views/dealer-locator/dealer-locator';

const DealerLocator: React.SFC = () => {
  return (
    <Layout theme={{ headerDark: true, footerDark: true }}>
      <Page>
        <DealerLocatorView />
      </Page>
    </Layout>
  );
};

export default DealerLocator;
