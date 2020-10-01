require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `PRAKTIK - Vodoinštalačný materiál`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@coderkin`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS,
        // // Defines where to place the tracking script - `true` in the head and `false` in the body
        // head: false,
        // // Setting this parameter is optional
        // anonymize: true,
        // // Setting this parameter is also optional
        // respectDNT: true,
        // // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // // Defers execution of google analytics script after page load
        // defer: false,
        // // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_HOST,
        // queryLimit: 1000, // Default to 100
        contentTypes: [`product`, `post`, 'category'],
        //If using single types place them in this array.
        singleTypes: [`hero-section`, `about-section`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: process.env.STRAPI_USER,
          password: process.env.STRAPI_PWD,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: process.env.SNIPCART_API_KEY,
        autopop: true
      }
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: '3.0.15',
        publicApiKey: process.env.SNIPCART_API_KEY, // use public api key here or in environment variable
        defaultLang: 'sk',
        currency: 'eur',
        openCartOnAdd: false,
        locales: {
          sk: {
            actions: {
              checkout: 'Objednať',
            },
          }
        },
        innerHTML: `
            <billing section="bottom">
                <!-- Customization goes here -->
            </billing>`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `praktik-vodoinstalacny-material`,
        short_name: `PRAKTIK`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/praktik_favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
