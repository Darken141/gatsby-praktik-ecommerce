import React from 'react'
import Layout from "../components/layout/layout"
import SEO from '../components/seo'
import CategorySection from '../sections/category_section/category_section'
import ContactSection from '../sections/contact_section/contact_section'

const ProductyPage = () => {

    return (
        <Layout>
            <SEO title="Kategórie produktov" />
            <CategorySection />
            <ContactSection heading="Nenašli ste hľadaný produkt? Napíšte nám." />
        </Layout>
    )
}

export default ProductyPage
