/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);


exports.onCreateNode = async ({
    node,
    actions,
    store,
    cache,
    createNodeId,
}) => {
    const { createNode } = actions

    let multipleImages = node.images

    if (node.internal.type === "StrapiProduct") {
        if (multipleImages.length > 0) {
            // multipleImages.forEach(el => console.log(el))
            const images = await Promise.all(
                multipleImages.map(el => {
                    console.log(el.url)
                    if (process.env.NODE_ENV === 'production') {
                        return createRemoteFileNode({
                            url: `${el.url}`,
                            parentNodeId: node.id,
                            store,
                            cache,
                            createNode,
                            createNodeId,
                        })
                    } else {
                        return createRemoteFileNode({
                            url: `${process.env.STRAPI_HOST}${el.url}`,
                            parentNodeId: node.id,
                            store,
                            cache,
                            createNode,
                            createNodeId,
                        })
                    }
                }
                )
            )

            multipleImages.forEach((image, i) => {
                image.localFile___NODE = images[i].id
            })
        }
    }
}

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