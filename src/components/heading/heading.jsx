import React from 'react'
import { spanStyles, headingStyles } from './heading.module.scss'

const Heading = ({ children }) => {
    return (
        <React.Fragment
        >
            <span className={spanStyles}
                data-sal="slide-right"
                data-sal-delay="1000"
                data-sal-easing="ease-in"
                data-sal-duration="1000"
            ></span>
            <h3 className={headingStyles}
                data-sal="slide-right"
                // data-sal-delay="300"
                data-sal-easing="ease-in"
                data-sal-duration="1000"
            >{children}</h3>
        </React.Fragment>
    )
}

export default Heading
