
import BackToTop from '@/components/BackToTop'
import Clients from '@/components/Clients'
import Footer from '@/components/Footer'
import Form from '@/components/Form'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import PricingTable from '@/components/PricingTable'
import Testimonial from '@/components/testimonial'
import Video from '@/components/Video'
import Why_Choose from '@/components/Why_Choose'
import React from 'react'
import PPAP from '@/components/ppap'
import Feature from '@/components/Feature'

const Home = () => {
  return (
    <div>
    <div className='container mx-auto absolute md:hidden'><Navbar/></div>
    <Hero/>
    <PPAP/>
    <Why_Choose/>
    <Clients/>

    {/* <Video/>     */}

    <Feature/>
    <PricingTable/>
    <Testimonial/>
    <Form/>
    <Footer/>
    <BackToTop/>
    </div>
  )
}

export default Home