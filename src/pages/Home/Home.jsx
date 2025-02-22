import React from 'react'
import Hero from '../../components/Hero/Hero'
import AboutUs from '../../components/About-us/AboutUs'
import Services from '../../components/Services/Services'
import Footer from '../../components/Footer/Footer'
import ContactUs from '../../components/Contact/Contact'
import Navbar from '../../components/Navbar/Navbar'
import Mission from '../../components/Mission/Mission'

const Home = () => {
  return (
    <main className="min-w-full bg-white text-dark ">

    {/* <main className="overflow-x-hidden bg-white text-dark"> */}
    <Navbar />

    <Hero />
    <AboutUs />
    <Services />
    <Mission/>
    {/* <Banner />
    <Subscribe />
    <Banner2 /> */}
    <ContactUs/>
    <Footer />
  </main>
  )
}

export default Home