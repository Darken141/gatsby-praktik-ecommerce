import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { blogSection, postWrapper, wave, waveWrapper } from './blog_section.module.scss'
import Heading from '../../components/heading/heading'
import Image from 'gatsby-image'
import Wave from '../../images/wave.svg'


const BlogSection = () => {
    const data = useStaticQuery(graphql`
    {
        allStrapiPost {
            nodes {
                name
                slug
                id
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
    }
    `)

    return (
        <section id="blog" className={blogSection}>
            <div className='container'>
                <Heading>Články ktoré by Vás mohli zaujímať</Heading>

                <div className={postWrapper}>
                    {
                        data.allStrapiPost.nodes.map(({ id, name, slug, cover }, idx) => {
                            return (
                                <Link key={id} to={`/blog/${slug}`}
                                    data-sal="fade"
                                    data-sal-delay={`${idx}000`}
                                    data-sal-easing="ease-in"
                                    data-sal-duration="1000"
                                >
                                    <div>
                                        <Image fluid={cover.childImageSharp.fluid} />
                                        <h4>
                                            {name}
                                        </h4>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className={waveWrapper}>
                <Wave className={wave} />
            </div>
        </section >
    )
}

export default BlogSection
