import React from 'react'
import Heading from '../../components/heading/heading'
import { aboutSection, row, col } from './about_section.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Image from 'gatsby-image'
import { AiOutlineFacebook } from 'react-icons/ai'

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    {
      strapiAboutSection {
        content
        image {
          childImageSharp {
            fluid {
              aspectRatio
              originalImg
              base64
              originalName
              presentationHeight
              presentationWidth
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
              tracedSVG
            }
          }
        }
      }
    }
  `)

  // console.log()

  return (
    <section id='o-nas' className={aboutSection}>
      <div className='container'>
        <Heading>Dovoľte Nám sa predstaviť</Heading>
        <div className={row}>
          <div className={col}>
            <ReactMarkdown source={data.strapiAboutSection.content} />
            <ul>
              <li>
                <a href="https://www.facebook.com/predajnaPraktik">
                  <AiOutlineFacebook /> Predajňa Praktik
                </a>
              </li>

            </ul>
          </div>
          <div className={col}>
            <Image fluid={data.strapiAboutSection.image.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
