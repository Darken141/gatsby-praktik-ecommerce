import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ProductSlider from '../../components/product_slider/product_slider'
import DownWave from '../../images/down_wave.svg'
import CategoryList from '../../components/category_list/category_list'

import { categorySectionStyles } from './category_section.module.scss'

const CategorySection = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiCategory (filter: {type: {ne: "Novinky"}}) {
        totalCount
        nodes {
            id
          type
          products {
            id
            slug
            price
            name
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
          }
        }
      }
    }
  `)

  const categories = data.allStrapiCategory.nodes

  return (
    <React.Fragment>
      <section className={categorySectionStyles}>
        <h1>Vyberte si svoju kategóriu.</h1>

        <div className='container'>
          <CategoryList />

          {categories.map(({ id, type, products }) => (
            <ProductSlider key={id} category={type} products={products} />
          ))}
        </div>
      </section>
      <DownWave />

    </React.Fragment>
  )
}

export default CategorySection
