import React, { useState } from 'react'
import { footerNavItems } from '../../constants/nav_items'
import { Link } from 'gatsby'
import CustomButton from '../button/button'
import Wave from '../../images/wave-3.svg'
import axios from 'axios'

import { footer, row, col, sitemapStyles, openingHours, emailStyles, newsletterInputStyles, waveWrapper, wave } from './footer.module.scss'

const Footer = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (email === '') return

        axios({
            method: 'post',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                'api-key': process.env.SENDIN_BLUE_API_KEY
            },
            url: 'https://api.sendinblue.com/v3/contacts',
            data: {
                email: email,
            }
        });

        setGdpr(false)
        setEmail('')
    }

    return (
        <React.Fragment>
            <div className={waveWrapper}>
                <Wave className={wave} />
            </div>

            <footer className={footer}>
                <div className='container'>
                    <div className={row}>
                        <div className={col}>
                            <h4>Sitemap</h4>

                            <ul className={sitemapStyles}>
                                <li>
                                    <Link to='/'>Domov</Link>
                                </li>
                                {footerNavItems.map(({ id, name, slug }) => {
                                    return (
                                        <li key={id}>
                                            <Link to={slug}>
                                                {name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={col}>
                            <h4>Addresa</h4>
                            <address>
                                Hviezdoslavova 28A<br />
                        915 01 Nové Mesto nad Váhom <br />
                        Slovensko
                        <br /> <br />
                        +421 949 253 305 <br />
                                <a href="mailto:predajnapraktik@outlook.sk" className={emailStyles}>
                                    predajnapraktik@outlook.sk
                        </a>
                            </address>

                        </div>
                        <div className={col}>
                            <h4>Otváracie hodiny</h4>

                            <ul className={openingHours}>
                                <li>
                                    <p>
                                        PO
                                </p>
                                    <p>|</p>
                                    <p>
                                        08:00 - 17:00
                                </p>
                                </li>
                                <li>
                                    <p>
                                        UT
                                </p>
                                    <p>|</p>
                                    <p>
                                        08:00 - 17:00
                                </p>
                                </li>
                                <li>
                                    <p>
                                        ST
                                </p>
                                    <p>|</p>
                                    <p>
                                        08:00 - 17:00
                                </p>
                                </li>
                                <li>
                                    <p>
                                        ŠT
                                </p>
                                    <p>|</p>
                                    <p>
                                        08:00 - 17:00
                                </p>
                                </li>
                                <li>
                                    <p>
                                        PI
                                </p>
                                    <p>|</p>
                                    <p>
                                        08:00 - 17:00
                                </p>
                                </li>
                                <li>
                                    <p>
                                        SO
                                </p>
                                    <p>|</p>
                                    <p>
                                        08:00 - 12:00
                                </p>
                                </li>
                                <li>
                                    <p>
                                        NE
                                </p>
                                    <p>|</p>
                                    <p>
                                        zatvorené
                                </p>
                                </li>
                            </ul>
                        </div>
                        <div className={col}>
                            <h4>Newsletter</h4>
                            <form onSubmit={handleSubmit} className={newsletterInputStyles}>
                                <label htmlFor="footer-email">Váš e-mail:</label>
                                <input id='footer-email' name='footer-email' type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='priklad@gmail.com' />
                                <CustomButton type='submit'>
                                    Odoberať novinky
                                </CustomButton>
                            </form>
                        </div>
                    </div>
                </div>
                <span
                    data-sal="slide-up"
                    // data-sal-delay={`${idx}000`}
                    data-sal-easing="ease-in-out"
                    data-sal-duration="1500"
                >
                    &copy; 2020 CODERKIN
            </span>
            </footer>
        </React.Fragment>
    )
}

export default Footer