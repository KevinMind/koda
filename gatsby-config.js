const appendScript = require.resolve('./src/custom-sw-code');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Complete Amplify Starter (Auth, Api)',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /vectors/,
        },
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      icons: [
        {
          src: `/favicons/android-chrome-192x192.png`,
          sizes: `192x192`,
          type: `image/png`,
        },
        {
          src: `/favicons/android-chrome-512x512.png`,
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `fullscreen`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript,
        precachePages: [`/events/*`],
      },
    },
  ],
};
