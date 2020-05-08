const path = require('path');

const appendScript = require.resolve('./src/custom-sw-code');
const icon = path.resolve(__dirname, 'src', 'assets', 'images', 'gatsby-icon.png');
console.log({ icon });

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
        icon: `src/assets/images/gatsby-icon.png`,
        name: `HappyPuppy`,
        short_name: `HapPup`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#2196f3`,
        display: `fullscreen`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     appendScript,
    //     precachePages: [`/events/*`],
    //   },
    // },
  ],
};
