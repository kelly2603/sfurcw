import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImg from "../components/Home/HeroImg"
import TeamIntro from "../components/Home/TeamIntro"
import Sponsors from "../components/Home/Sponsors"

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroImg />
        <TeamIntro />
        <Sponsors />
        <Footer />
    </div>
  )
}

export default Home