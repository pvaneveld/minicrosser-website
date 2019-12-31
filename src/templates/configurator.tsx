import React from 'react';
import Layout from '../components/Layouts/Layout/Layout';
import Page from '../components/SmoothScroll/Page/Page';

const Configurator: React.SFC = () => {
  return (
    <Layout theme={{ headerDark: true, footerDark: true }} configurator={true}>
      <Page>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, obcaecati enim incidunt, error perspiciatis
        dolorem voluptas expedita voluptate harum sunt aut sapiente? Harum deleniti quos sint nisi, repudiandae nesciunt
        quas!
      </Page>
    </Layout>
  );
};

export default Configurator;
