import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import HeroImg2 from "../components/HeroImg2"
import ContactForm from '../components/Contact/ContactForm'
import Img1 from "../components/Contact/contact_images/IMG_9670.jpg"

const Contact = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="CONTACT" image={Img1}/>
        <ContactForm />
        <Footer />
    </div>
  )
}

export default Contact