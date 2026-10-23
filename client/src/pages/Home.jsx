import React from 'react'
import Hero from '../components/Hero'
import KolkataLocalities from '../components/KolkataLocalities'
import About from '../components/About'
import FeaturedProperties from '../components/FeaturedProperties'
import Faq from '../components/Faq'
import Cta from '../components/Cta'
import Testimonial from '../components/PartnerBrands'

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#fffbee] to-white'>
      <Hero />
      <KolkataLocalities />
      <About />
      <FeaturedProperties />
      <Faq />
      <Cta />
      <Testimonial />
    </div>
  )
}

export default Home