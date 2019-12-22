import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FormInput from '../components/Form/FormInput/FormInput';
import ContentContainer from '../components/Layouts/ContentContainer/ContentContainer';
import Layout from '../components/Layouts/Layout/Layout';
import Page from '../components/SmoothScroll/Page/Page';
import DealerForm from '../views/dealer-form/dealer-form';

const DealerFormPage: React.SFC = () => {
  return (
    <Layout theme={{ headerDark: true, footerDark: true }}>
      <Page background="gray">
        <ContentContainer>
          <DealerForm />
        </ContentContainer>
      </Page>
    </Layout>
  );
};

export default DealerFormPage;
