import React, { useState } from 'react'
import Heading from '../../components/heading/heading'
import styles, { cssLabel, cssCheckbox, checkboxContainerStyles, infoStyles, contactSectionStyles, contactFormContainer, formTextarea, waveWrapper, wave } from './contact_section.module.scss'
import CustomInput from '../../components/form_input/form_input'
import CustomButton from '../../components/button/button'
import CustomCheckbox from '../../components/checkbox/checkbox'
import Wave from '../../images/wave-3.svg'
import { BsInfoCircle } from 'react-icons/bs'

const ContactSection = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <section id='kontakt' className={contactSectionStyles}>
            <BsInfoCircle className={infoStyles} />

            <div className='container'>
                <Heading>
                    Máte otázku? Napíšte nám!
                </Heading>

                <div className={contactFormContainer}>
                    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
                        <CustomInput
                            type='text'
                            id='firstname'
                            name="firstname"
                            value={firstName}
                            handleChange={e => setFirstName(e.target.value)}
                            label="Vaše meno"
                        />
                        <CustomInput
                            type='text'
                            id='lastname'
                            name='lastname'
                            value={lastName}
                            handleChange={e => setLastName(e.target.value)}
                            label="Vaše priezvisko"
                        />
                        <CustomInput
                            type='email'
                            id='contactemail'
                            name='contactemail'
                            value={email}
                            handleChange={e => setEmail(e.target.value)}
                            label="Váš e-mail"
                        />
                        <div className={formTextarea}>
                            <textarea id="message" name='message' rows="4" value={message} onChange={e => setMessage(e.target.value)} />
                            <label className={message.length ? "shrink" : ""}>Vaša správa</label>
                        </div>

                        <CustomCheckbox />

                        <CustomButton type="submit">
                            Odoslať správu
                        </CustomButton>
                    </form>
                </div>
            </div>


            <div className={waveWrapper}>
                <Wave className={wave} />
            </div>
        </section>
    )
}

export default ContactSection
