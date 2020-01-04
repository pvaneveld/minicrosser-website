import React from 'react';
import Layout from '../components/Layouts/Layout/Layout';
import Page from '../components/SmoothScroll/Page/Page';
import PrevNext from '../components/Configurator/PrevNext/PrevNext';
import { useSelector } from 'react-redux';
import ConfiguratorPageOne from '../views/configurator/page-1/page-1';

const Configurator: React.SFC = () => {
  const currentPage = useSelector((state: RootState) => state.configurator.page);

  return (
    <Layout theme={{ headerDark: true, footerDark: true }} configurator={true}>
      <Page>{currentPage === 1 && <ConfiguratorPageOne />}</Page>
    </Layout>
  );
};

export default Configurator;
