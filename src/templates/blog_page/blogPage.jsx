import React from 'react'
import Layout from '../../components/layout/layout'
import SEO from '../../components/seo'
import { blogPage } from './blogPage.module.scss'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"


const BlogPage = ({ data }) => {
    return (
        <Layout>
            <SEO title='blog post' />
            <section className={blogPage}>
                <Image fluid={data.strapiPost.cover.childImageSharp.fluid} />
                <ReactMarkdown source={data.strapiPost.body} />
                <p>
                    <Moment format="MMM Do YYYY">{data.strapiPost.updatedAt}</Moment>
                </p>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query GetPost($slug: String) {
        strapiPost(slug: {eq: $slug}) {
            body
            updatedAt
            cover {
                childImageSharp {
                    fluid {
                        base64
                        tracedSVG
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                        originalImg
                        originalName
                        presentationWidth
                        presentationHeight
                        __typename
                    }        
                }
            }
        }
    }
`

export default BlogPage
