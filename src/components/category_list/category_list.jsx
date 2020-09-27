import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { BsFillDropletFill } from 'react-icons/bs'

import { categoryItemStyles, categoryListStyles } from './category_list.module.scss'

const CategoryList = () => {
  const { allStrapiCategory: { nodes } } = useStaticQuery(graphql`
    {
      allStrapiCategory(filter: {type: {ne: "Novinky"}}) {
        nodes {
          type
          strapiId
        }
      }
    }
    `)

  return (
    <div className={categoryListStyles}>
      {nodes.map(({ strapiId, type }, idx) => (
        <Link to={`/kategorie/${strapiId}`} key={strapiId} className={categoryItemStyles}
          data-sal="slide-up"
          data-sal-easing="ease-in-out"
        >
          <BsFillDropletFill /> <p>{type}</p>
        </Link>
      ))}
    </div>
  )
}

export default CategoryList
