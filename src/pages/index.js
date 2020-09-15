import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HeroSection from '../sections/hero_section/hero_section'
import FeaturedProducts from '../sections/featured_products/featured_products'
import DownWave from '../images/down_wave.svg'
import BlogSection from '../sections/blog_section/blog_section'
import AboutSection from '../sections/about_section/about_section'
import NewsletterSection from '../sections/newsletter_section/newsletter_section'
import TestimonialSection from '../sections/testimonial_section/testimonial_section'
import ContactSection from '../sections/contact_section/contact_section'

const IndexPage = () => (
  <Layout>
    <SEO title="Domov" />
    <HeroSection />
    <FeaturedProducts />
    <DownWave />
    <BlogSection />
    <AboutSection />
    <DownWave />
    <NewsletterSection />
    <TestimonialSection />
    <DownWave />
    <ContactSection />
  </Layout>
)

export default IndexPage
