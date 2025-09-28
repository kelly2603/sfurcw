import React from 'react'
import Navbar from '../components/Navbar'
import Sponsors from '../components/Sponsor/Sponsors'
import Footer from "../components/Footer"
// import Img1 from "../components/Contact/contact_images/IMG_9670.jpg"

const Sponsor = () => {
  return (
    <div>
        <Navbar />
        {/* <HeroImg2 heading="SPONSOR" image={Img1}/> */}
        <Sponsors />
        <Footer />
    </div>
  )
}

export default Sponsor