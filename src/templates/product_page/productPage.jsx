import React from 'react'
import Layout from '../../components/layout/layout'
import SEO from '../../components/seo'
import Image from 'gatsby-image'
import { productPage, row, col } from './productPage.module.scss'
import Blob from '../../images/product_blob.svg'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'

const ProductPage = ({ data }) => {
  const { product } = data

  return (
    <Layout>
      <SEO title={product.name} />
      <section className={productPage + " container"}>
        <div className={row}>
          <div className={col}>

            <Image fixed={product.image.childImageSharp.fixed} />
          </div>
          <div className={col}>
            <Blob />
            <h1>{product.name}</h1>
            <span>{parseFloat(product.price).toFixed(2)}€</span>
            <ReactMarkdown source={product.description} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
  product: strapiProduct( slug: {eq: $slug}) {
    name
    price
    description
    image {
      childImageSharp {
        fixed (width: 500){
            src
            aspectRatio
            base64
            originalName
            height
            srcSet
            srcSetWebp
            srcWebp
            tracedSVG
            width
        }
      }
    }
  }
}
`


export default ProductPage
