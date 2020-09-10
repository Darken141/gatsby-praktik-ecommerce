import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HeroSection from '../sections/hero_section/hero_section'
import FeaturedProducts from '../sections/featured_products/featured_products'
import DownWave from '../images/down_wave.svg'
import BlogSection from '../sections/blog_section/blog_section'
import AboutSection from '../sections/about_section/about_section'

const IndexPage = () => (
  <Layout>
    <SEO title="Domov" />
    <HeroSection />
    <FeaturedProducts />
    <DownWave />
    <BlogSection />
    <AboutSection />
    <DownWave />

  </Layout>
)

export default IndexPage
