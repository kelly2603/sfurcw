import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import HeroImg2 from "../components/HeroImg2"
import Img1 from "../components/Teams/teams_images/IMG_2346.jpg"

const Teams = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="ROBOMASTER" image={Img1}/>
        <Footer />
    </div>
  )
}

export default Teams