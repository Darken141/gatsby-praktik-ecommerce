/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
    {
        allStrapiProduct {
            nodes {
            slug
            }
        }
    }
    `)

    const blogResult = await graphql(`
    {
        allStrapiPost {
            nodes {
                slug
            }
        }
    }
    `)

    result.data.allStrapiProduct.nodes.forEach((product) => {
        createPage({
            path: `/produkty/${product.slug}`,
            component: path.resolve('src/templates/product_page/productPage.jsx'),
            context: {
                slug: product.slug
            }
        })
    })

    blogResult.data.allStrapiPost.nodes.forEach(post => {
        createPage({
            path: `/blog/${post.slug}`,
            component: path.resolve('src/templates/blog_page/blogPage.jsx'),
            context: {
                slug: post.slug
            }
        })
    })
}

// exports.createPages = async ({ graphql, actions }) => {
// }