import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import HeroImg2 from "../components/HeroImg2"
import OurBG from "../components/About/OurBG"
import Execs from '../components/About/Execs'
import Img1 from "../components/About/about_images/IMG_2413.jpg"
import Achievements from '../components/About/Achievements'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" image={Img1}/>
      <OurBG />
      <Achievements />
      <Execs />
      <Footer />
    </div>
  )
}

export default About