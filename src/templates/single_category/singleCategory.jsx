import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import ProductCard from '../../components/product_card/product_card'
import DownWave from '../../images/down_wave.svg'

import { productListStyles, singleCategoryStyles } from './singleCategory.module.scss'

const SingleCategory = ({ data }) => {
    return (
        <Layout>
            <section className={singleCategoryStyles}>
                <div className='container'>
                    <div className={productListStyles} >
                        {data.strapiCategory ? (
                            data.strapiCategory.products.map(({ id, name, price, images, slug }) => {
                                return (
                                    <ProductCard
                                        key={id}
                                        name={name}
                                        price={price}
                                        images={images}
                                        slug={slug}
                                    />
                                )
                            })
                        ) : (
                                <h1>Ziadne produkty</h1>
                            )

                        }
                    </div>
                </div>
            </section>
            <DownWave />
        </Layout>
    )
}

export const query = graphql`
    query GetSingleCategory($id: String) {
    strapiCategory(products: {elemMatch: {published: {eq: true}}}, strapiId: {eq: $id}) {
        type
        products {
        images {
            localFile {
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
        id
        name
        price
        slug
        }
    }
    }
`


export default SingleCategory
