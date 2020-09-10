import React from 'react'
import { spanStyles, headingStyles } from './heading.module.scss'

const Heading = ({ children }) => {
    return (
        <React.Fragment>
            <span className={spanStyles}></span>
            <h3 className={headingStyles}>{children}</h3>
        </React.Fragment>
    )
}

export default Heading
