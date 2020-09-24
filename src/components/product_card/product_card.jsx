import React from 'react'
import { Link } from 'gatsby'
import { cardStyles, productImageStyles, headingRow, buttonContainer } from './product_card.module.scss'
import Image from 'gatsby-image'

const ProductCard = ({ images, name, price, slug }) => {
    return (
        <div className={cardStyles}
            data-sal="slide-up"
            data-sal-easing="ease-in-out"
            data-sal-duration="1500"
        >
            <div className={productImageStyles}>
                <Image fluid={images[0].localFile.childImageSharp.fluid} />
            </div>
            <div>
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
        </div>
    )
}

export default ProductCard
