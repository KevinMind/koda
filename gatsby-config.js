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
