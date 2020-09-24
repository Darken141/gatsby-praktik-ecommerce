import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { section } from './featured_products.module.scss'
import ProductSlider from '../../components/product_slider/product_slider'

const FeaturedProducts = () => {
  const data = useStaticQuery(graphql`
  {
    allStrapiProduct(filter: {categories: {elemMatch: {type: {eq: "Novinky"}}}, published: {eq: true}}) {
      nodes {
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
        slug
        price
        name
      }
    }
  }
  `)

  return (
    <section id='najnovsie-produkty' className={section}>
      <div className='container'>
        <ProductSlider
          products={data.allStrapiProduct.nodes}
          category="Najnovšie produkty"
        />
      </div>
    </section >
  )
}

export default FeaturedProducts