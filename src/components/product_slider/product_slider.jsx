import React from 'react'
import { sliderWrapperStyles } from './product_slider.module.scss'
import Heading from '../../components/heading/heading'
import ProductCard from '../product_card/product_card'

const ProductSlider = ({ products, category }) => {
    return (
        <React.Fragment>
            <Heading>
                {category}
            </Heading>
            <div className={sliderWrapperStyles}>
                {products.map(({ id, name, images, price, slug }) => {
                    return (
                        <ProductCard
                            key={id}
                            name={name}
                            price={price}
                            images={images}
                            slug={slug}
                        />
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default ProductSlider
