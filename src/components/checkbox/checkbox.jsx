import React from 'react'
import { checkboxContainerStyles, cssCheckbox, cssLabel } from './checkbox.module.scss'

const CustomCheckbox = () => {
    return (
        <div className={checkboxContainerStyles}>
            <input
                type="checkbox"
                name="checkboxG1"
                id="checkboxG1"
                className={cssCheckbox}
            />

            <label
                htmlFor="checkboxG1"
                className={cssLabel}
            >
                Súhlasim so spracovanim osobných údajov.
            </label>

        </div>
    )
}

export default CustomCheckbox
