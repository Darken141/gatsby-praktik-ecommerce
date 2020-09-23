import React from 'react'
import Heading from '../../components/heading/heading'
import { testimonialSectionStyles, testimonialCard, testimonialContainer, avatar, stars } from './testimonial_section.module.scss'
import { BsPerson, BsStarFill } from 'react-icons/bs'


const TestimonialSection = () => {
    return (
        <section id='referencie' className={testimonialSectionStyles}>
            <div className='container'>
                <Heading>
                    Ako boli spokojní s nami naši zákazníci
                </Heading>

                <div className={testimonialContainer}>
                    <div className={testimonialCard}
                        data-sal="slide-right"
                        // data-sal-delay={`${idx}000`}
                        data-sal-easing="ease-in-out"
                        data-sal-duration="1500"
                    >
                        <div className={avatar}>
                            <BsPerson />
                        </div>
                        <div className={stars}>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                        </div>
                        <p>
                            Super obchod. Príjemná pani majiteľka. A ten pokérovaný predavač nemá chybu.
                        </p>
                        <span>- Roman Pastorek</span>
                    </div>
                    <div className={testimonialCard}
                        data-sal="slide-up"
                        // data-sal-delay={`${idx}000`}
                        data-sal-easing="ease-in-out"
                        data-sal-duration="1500"
                    >
                        <div className={avatar}>
                            <BsPerson />
                        </div>
                        <div className={stars}>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                        </div>
                        <p>
                            Kupit tu vsetko a za rozumnu cenu do kupelne.
                        </p>
                        <span>- Milan Plesník</span>

                    </div>

                    <div className={testimonialCard}
                        data-sal="slide-left"
                        // data-sal-delay={`${idx}000`}
                        data-sal-easing="ease-in-out"
                        data-sal-duration="1500"
                    >
                        <div className={avatar}>
                            <BsPerson />
                        </div>
                        <div className={stars}>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                        </div>
                        <p>
                            Potreboval som na rýchlo hadicu na napojenie batérie a mali aj rozne dĺžky. Za mňa spokojnosť.
                        </p>
                        <span>- Karol Ambrož</span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TestimonialSection
