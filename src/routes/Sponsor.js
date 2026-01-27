import React from 'react'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import Sponsors from '../components/Sponsor/Sponsors'
import Footer from "../components/Footer"
import Img1 from "../components/About/about_images/Club_day_photo.JPG"

const Sponsor = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="SPONSOR" image={Img1}/>
        <Sponsors />
        <Footer />
    </div>
  )
}

export default Sponsor