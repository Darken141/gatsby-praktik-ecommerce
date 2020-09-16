import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { productImageStyles, section, cardWrapper, card, headingRow, buttonContainer } from './featured_products.module.scss'
import Image from 'gatsby-image'
import CustomButton from '../../components/button/button'
import Heading from '../../components/heading/heading'

const FeaturedProducts = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiProduct {
        nodes {
          price
          slug
          id
          name
          image {
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
    <section id='najnovsie-produkty' className={section}>
      <div className='container'>
        <Heading>
          Najnovšie produkty
        </Heading>

        <div className={cardWrapper}>
          {
            data.allStrapiProduct.nodes.map(({ id, name, image, price, slug }) => {
              return (
                <div key={id} className={card}>
                  <div className={productImageStyles}>
                    <Image fluid={image.childImageSharp.fluid} />
                  </div>
                  <div className={headingRow}>
                    <h4>{name}</h4>
                    <span>{parseFloat(price).toFixed(2)}€</span>
                  </div>
                  <div className={buttonContainer}>
                    <button
                      className="snipcart-add-item custom-button"
                      data-item-id={slug}
                      data-item-price={parseFloat(price).toFixed(2)}
                      data-item-url={`/produkty/${slug}`}
                      data-item-name={name}
                    >
                      Pridať do košíka
                    </button>

                    <Link to={`/produkty/${slug}`}>Zistiť viac</Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </section >
  )
}

export default FeaturedProducts