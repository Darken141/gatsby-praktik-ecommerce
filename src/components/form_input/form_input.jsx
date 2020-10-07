import React from 'react'
import { inputContainerStyles, inputStyles, labelStyles, shrinkLabelStyles } from './form_input.module.scss'

const CustomInput = ({ label, handleChange, ...otherProps }) => {
    return (
        <div className={inputContainerStyles}>
            <input className={inputStyles} onChange={handleChange} {...otherProps} />
            {label ? (
                <label
                    className={otherProps.value.length ? shrinkLabelStyles : labelStyles}
                >
                    {label}
                </label>
            ) : null}
        </div>
    )
}

export default CustomInput