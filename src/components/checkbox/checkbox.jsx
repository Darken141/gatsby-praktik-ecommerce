import React from 'react'
import { checkboxStyles } from './checkbox.module.scss'

const CustomCheckbox = ({ grdp, setGdpr, id }) => {

    return (
        <div className={checkboxStyles}>
            <input type="checkbox" id={id} name="gdrp" checked={grdp} onChange={() => setGdpr(!grdp)} />
            <label htmlFor="gdrp">Súhlasim so spracovaním osobných údajov</label>
        </div>
    )
}

export default CustomCheckbox
