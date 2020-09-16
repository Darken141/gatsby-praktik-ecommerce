import React, { useState } from 'react'
import Heading from '../../components/heading/heading'
import { newsLetterSectionStyles, formContainer, formInput, at, waveWrapper, wave } from './newsletter_section.module.scss'
import Wave from '../../images/wave.svg'
import CustomButton from '../../components/button/button'
import CustomInput from '../../components/form_input/form_input'
import CustomCheckbox from '../../components/checkbox/checkbox'

const NewsletterSection = () => {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [GDPR, setGDPR] = useState(false)



    return (
        <section id='email-list' className={newsLetterSectionStyles}>
            <span className={at}>@</span>

            <div className='container'>
                <Heading>
                    Buďte informovaný o aktuálnych novinkách v našom obchode
                </Heading>
                <div className={formContainer}>
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
                    <CustomCheckbox />
                    <CustomButton>
                        Odoberať novinky
                    </CustomButton>
                </div>
            </div>

            <div className={waveWrapper}>
                <Wave className={wave} />
            </div>
        </section >
    )
}

export default NewsletterSection
