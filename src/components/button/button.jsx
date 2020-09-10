import React from 'react'
import { buttonStyles, invertButtonStyles } from './button.module.scss'

const CustomButton = ({ ...props }) => {
    return (
        <button className={props.invert ? invertButtonStyles : buttonStyles}>
            {props.children}
        </button>
    )
}

export default CustomButton
