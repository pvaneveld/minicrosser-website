import React, { useEffect } from 'react';
import ContentContainer from '../components/Layouts/ContentContainer/ContentContainer';
import Layout from '../components/Layouts/Layout/Layout';
import Page from '../components/SmoothScroll/Page/Page';
import TestDriveForm from '../views/test-drive-form/test-drive-form';

const TestDriveFormPage: React.SFC = ({ location }) => {
  return (
    <Layout theme={{ headerDark: true, footerDark: true }}>
      <Page background="gray">
        <ContentContainer headerSpacing={true} footerSpacing={true}>
          <TestDriveForm
            preselectedDealer={location.state && location.state.companyName ? location.state.companyName : ''}
          />
        </ContentContainer>
      </Page>
    </Layout>
  );
};

export default TestDriveFormPage;
