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
    let categoryProducts = node.products

    if (node.internal.type === "StrapiCategory") {
        if (categoryProducts.length > 0) {
            categoryProducts.forEach(async (products) => {
                let categoryMultipleImages = products.images
                const images = await Promise.all(
                    categoryMultipleImages.map(el => {
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

                categoryMultipleImages.forEach((image, i) => {
                    image.localFile___NODE = images[i].id
                })
            })
        }
    }

    if (node.internal.type === "StrapiProduct") {
        if (multipleImages.length > 0) {
            // multipleImages.forEach(el => console.log(el))
            const images = await Promise.all(
                multipleImages.map(el => {
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

    const categoryResult = await graphql(`
    {
        allStrapiCategory {
            nodes {
            strapiId
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

    categoryResult.data.allStrapiCategory.nodes.forEach(category => {
        createPage({
            path: `/kategorie/${category.strapiId}`,
            component: path.resolve('src/templates/single_category/singleCategory.jsx'),
            context: {
                id: category.strapiId
            }
        })
    })
}

// exports.createPages = async ({ graphql, actions }) => {
// }