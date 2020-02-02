import React from 'react';
import { Helmet } from 'react-helmet';

const Head: React.SFC = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="De website van Minicrosser. Een premium scootmobiel." />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="google" content="notranslate" />

      <title>Minicrosser</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.62/vfs_fonts.js" defer></script>
      <html lang="nl" />
    </Helmet>
  );
};

export default Head;
