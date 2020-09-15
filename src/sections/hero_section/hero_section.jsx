import React from 'react'
import { section, wave, waveWrapper, row, col, blob } from './hero_section.module.scss'
// import BackgroundSlider from 'gatsby-image-background-slider'
import { useStaticQuery, graphql } from 'gatsby'
import Wave from '../../images/wave.svg'
// import Wave2 from '../../images/wave-2.svg'
// import Wave3 from '../../images/wave-3.svg'
import CustomButton from '../../components/button/button'
import Image from 'gatsby-image'
import Blob from '../../images/hero_blob.svg'

// const heroSectionData = [
//     {
//         id: 1,
//         heading: "Keramika",
//         subHeading: "Umyvadla, toalety, vane, sprchove vanicky a ine...",
//         cta: "/category",
//         wave: Wave
//     },
//     {
//         id: 2,
//         heading: "Kupelky",
//         subHeading: "Baterie, sprchove hlavice, podlahove zlaby, sprchove kuty...",
//         cta: "/category",
//         wave: Wave2
//     },
//     {
//         id: 3,
//         heading: "Cerpadla",
//         subHeading: "ponorne, povrchne, domace vodarne, precerpavacie...",
//         cta: "/category",
//         wave: Wave3
//     },
// ]


const HeroSection = () => {
  const data = useStaticQuery(graphql`
    {
      strapiHeroSection {
        heading
        background {
          childImageSharp {
            fluid  {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
                __typename
            }
            id
          }
        }
        subHeading
      }
    }
  `)
  const { heading, subHeading, background } = data.strapiHeroSection


  return (
    <section id='hero' className={section + " container"}>
      <div className={row}>
        <div className={col}>
          <h1>{heading}</h1>
          <h2>{subHeading}</h2>
          <CustomButton>Preist do Obchodu</CustomButton>
        </div>
        <div className={col}>
          <Blob className={blob} />
          <Image fluid={background.childImageSharp.fluid} />
        </div>
      </div>
      <div className={waveWrapper}>
        <Wave className={wave} />
      </div>
    </section>
  )
}

export default HeroSection
