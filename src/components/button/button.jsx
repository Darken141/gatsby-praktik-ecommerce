import React from 'react'
import { buttonStyles, invertButtonStyles } from './button.module.scss'

const CustomButton = ({ children, ...props }) => {
    return (
        <button type={props.type ? props.type : "button"} className={props.invert ? invertButtonStyles : buttonStyles} {...props}>
            {children}
        </button>
    )
}

export default CustomButton
