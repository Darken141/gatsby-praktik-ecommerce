import React from 'react'
import { formInput } from './form_input.module.scss'

const CustomInput = ({ ...props }) => {
    const { type, id, name, handleChange, value, label } = props

    return (
        <div className={formInput}>
            <input type={type} id={id} name={name} value={value} onChange={handleChange} />
            <label className={value.length ? "shrink" : ""}>{label}</label>
        </div>
    )
}

export default CustomInput
