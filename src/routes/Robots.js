import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import HeroImg2 from "../components/HeroImg2"
import RobotsInfo from "../components/Robots/RobotsInfo"
import Img1 from "../components/Robots/robots_images/IMG_2346.jpg"

const Robots = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="Robots" image={Img1}/>
        <RobotsInfo />
        <Footer />
    </div>
  )
}

export default Robots