import React from 'react'
import Hero from '../../components/Hero/Hero'
import AboutUs from '../../components/About-us/AboutUs'
import Services from '../../components/Services/Services'
import ContactUs from '../../components/Contact/Contact'
import Navbar from '../../components/Navbar/Navbar'
import Mission from '../../components/Mission/Mission'
import SuccessStories from '../../components/project/Project'
import TrustedBy from '../../components/trusted/Trusted'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <main className="w-full bg-white text-dark overflow-x-hidden">

    {/* <main className="overflow-x-hidden bg-white text-dark"> */}
    <Navbar />

    <Hero />
    <Services />
    <SuccessStories/>
    <AboutUs />
    <Mission/>
    <TrustedBy/>
    {/* <Banner />
    <Subscribe />
    <Banner2 /> */}
    <ContactUs/>
    <Footer />
  </main>
  )
}

export default Home