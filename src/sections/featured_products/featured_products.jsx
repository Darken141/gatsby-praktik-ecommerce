import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { section, cardWrapper, card, headingRow, buttonContainer } from './featured_products.module.scss'
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
              fixed(width: 200) {
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
    }
  `)

  return (
    <section className={section}>
      <div className='container'>
        <Heading>
          Najnovšie produkty
        </Heading>

        <div className={cardWrapper}>
          {
            data.allStrapiProduct.nodes.map(({ id, name, image, price, slug }) => {
              return (
                <div key={id} className={card}>
                  <Image fixed={image.childImageSharp.fixed} />
                  <div className={headingRow}>
                    <h4>{name}</h4>
                    <span>{parseFloat(price).toFixed(2)}€</span>
                  </div>
                  <div className={buttonContainer}>
                    <CustomButton >Pridať do košíka</CustomButton>
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