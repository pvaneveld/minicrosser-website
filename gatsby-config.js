module.exports = {
  siteMetadata: {
    title: 'Gatsby + Netlify CMS Starter',
    description:
      'This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Minicrosser`,
        short_name: `Minicrosser`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/img/chair.jpeg`,
        icons: [
          {
            src: `/favicons/android-icon-36x36.png`,
            sizes: '36x36',
            type: 'image/png',
            density: '0.75',
          },
          {
            src: `/favicons/android-icon-48x48.png`,
            sizes: '48x48',
            type: 'image/png',
            density: '1.0',
          },
          {
            src: `/favicons/android-icon-72x72.png`,
            sizes: '72x72',
            type: 'image/png',
            density: '1.5',
          },
          {
            src: `/favicons/android-icon-96x96.png`,
            sizes: '96x96',
            type: 'image/png',
            density: '2.0',
          },
          {
            src: `/favicons/android-icon-144x144.png`,
            sizes: '144x144',
            type: 'image/png',
            density: '3.0',
          },
          {
            src: `/favicons/android-icon-192x192.png`,
            sizes: '192x192',
            type: 'image/png',
            density: '4.0',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
