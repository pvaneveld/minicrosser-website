import React from 'react';
import ContentContainer from '../components/Layouts/ContentContainer/ContentContainer';
import Layout from '../components/Layouts/Layout/Layout';
import Page from '../components/SmoothScroll/Page/Page';
import DealerForm from '../views/test-drive-form/test-drive-form';

const TestDriveFormPage: React.SFC = () => {
  return (
    <Layout theme={{ headerDark: true, footerDark: true }}>
      <Page background="gray">
        <ContentContainer headerSpacing={true} footerSpacing={true}>
          <DealerForm />
        </ContentContainer>
      </Page>
    </Layout>
  );
};

export default TestDriveFormPage;