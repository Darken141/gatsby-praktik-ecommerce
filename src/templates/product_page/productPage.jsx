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
  console.log(product)

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
            <button
              className="snipcart-add-item custom-button"
              data-item-id={product.slug}
              data-item-price={parseFloat(product.price).toFixed(2)}
              data-item-url={`/produkty/${product.slug}`}
              data-item-name={product.name}

            // data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
            // data-item-image="/assets/images/starry-night.jpg"
            // data-item-name="The Starry Night"
            // data-item-custom1-name="Frame color"
            // data-item-custom1-options="Black|Brown|Gold">
            >
              Pridať do košíka
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
  product: strapiProduct( slug: {eq: $slug}) {
    slug
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
