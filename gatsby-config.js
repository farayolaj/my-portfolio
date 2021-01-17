/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-svgr',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Farayola Joshua',
        short_name: 'Farayola Joshua',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#2d2e32',
        display: 'standalone',
        icon: 'static/images/logo.png',
        cache_busting_mode: 'none'
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/logo*']
        }
      }
    }
  ],
};
