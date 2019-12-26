import React from 'react';
import ContentContainer from '../components/Layouts/ContentContainer/ContentContainer';
import Layout from '../components/Layouts/Layout/Layout';
import Page from '../components/SmoothScroll/Page/Page';

const DealerLocator: React.SFC = () => {
  return (
    <Layout theme={{ headerDark: true, footerDark: true }}>
      <Page background="gray">
        <ContentContainer headerSpacing={true} footerSpacing={true}>
          Dealer form
        </ContentContainer>
      </Page>
    </Layout>
  );
};

export default DealerLocator;
