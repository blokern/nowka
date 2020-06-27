require('dotenv').config({
  path: `.env.local`,
})

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Wella',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'wordpress1817265.home.pl/autoinstalator/wordpressplus',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        // auth: {
        //   wpcom_app_clientSecret: process.env.WORDPRESS_SECRET,
        //   wpcom_app_clientId: '63677',
        //   wpcom_user: process.env.WORDPRESS_USER,
        //   wpcom_pass: process.env.WORDPRESS_PASSWORD,
        // },
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `img`),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
