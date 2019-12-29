import React from 'react';
import ContentContainer from '../components/Layouts/ContentContainer/ContentContainer';
import Layout from '../components/Layouts/Layout/Layout';
import Page from '../components/SmoothScroll/Page/Page';
import ContactFormView from '../views/contact-form/contact-form';

const ContactForm: React.SFC = () => {
  return (
    <Layout theme={{ headerDark: true, footerDark: true }}>
      <Page background="gray">
        <ContentContainer headerSpacing={true} footerSpacing={true}>
          <ContactFormView />
        </ContentContainer>
      </Page>
    </Layout>
  );
};

export default ContactForm;
