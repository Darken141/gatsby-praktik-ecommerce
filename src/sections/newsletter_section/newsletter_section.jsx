import React, { useState } from 'react'
import Heading from '../../components/heading/heading'
import { newsLetterSectionStyles, formContainer, at, waveWrapper, wave } from './newsletter_section.module.scss'
import Wave from '../../images/wave.svg'
import CustomButton from '../../components/button/button'
import CustomInput from '../../components/form_input/form_input'
import CustomCheckbox from '../../components/checkbox/checkbox'
import axios from 'axios'

const NewsletterSection = () => {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [grdp, setGdpr] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!grdp) return
        if (fName === '') return
        if (lName === '') return
        if (email === '') return

        axios({
            method: 'post',
            headers: { accept: 'application/json', 'content-type': 'application/json', 'api-key': process.env.SENDIN_BLUE_API_KEY },
            url: 'https://api.sendinblue.com/v3/contacts',
            data: {
                email: email,
                attributes: {
                    FIRSTNAME: fName,
                    LASTNAME: lName
                }
            }
        });

        setGdpr(false)
        setEmail('')
        setFName('')
        setLName('')
    }


    return (
        <section id='email-list' className={newsLetterSectionStyles}>
            <span className={at}>@</span>

            <div className='container'>
                <Heading>
                    Buďte informovaný o aktuálnych novinkách v našom obchode
                </Heading>
                <form
                    className={formContainer}
                    data-sal="slide-left"
                    // data-sal-delay={`${idx}000`}
                    data-sal-easing="ease-in-out"
                    data-sal-duration="1500"
                    onSubmit={handleSubmit}
                >
                    <h4>Newsletter</h4>
                    <p>Maximálne raz do mesiaca Vám napíšeme, čo nové sme si pre Vás pripravili.</p>
                    <CustomInput
                        type='text'
                        id='fname'
                        name="fname"
                        value={fName}
                        handleChange={e => setFName(e.target.value)}
                        label="Vaše meno"
                    />
                    <CustomInput
                        type='text'
                        id='lname'
                        name="lname"
                        value={lName}
                        handleChange={e => setLName(e.target.value)}
                        label="Vaše priezvisko"
                    />
                    <CustomInput
                        type='email'
                        id='email'
                        name="email"
                        value={email}
                        handleChange={e => setEmail(e.target.value)}
                        label="Váš email"
                    />
                    <CustomCheckbox grdp={grdp} setGdpr={setGdpr} id="newsletter" />
                    <CustomButton type='submit'>
                        Odoberať novinky
                    </CustomButton>
                </form>
            </div>

            <div className={waveWrapper}>
                <Wave className={wave} />
            </div>
        </section >
    )
}

export default NewsletterSection
