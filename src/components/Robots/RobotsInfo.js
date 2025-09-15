import React from 'react'
import "./RobotsInfoStyles.css"
import Img1 from "./robots_images/IMG_2346.jpg"
import StandardImg from "./robots_images/IMG_6720.jpg"
import HeroImg from "./robots_images/IMG_6798.jpg"
import SentryImg from "./robots_images/IMG_6802.jpg"

const RobotsInfo = () => {
  return (
    <div className='main-container'>
        <div className='section-container'>

            {/* Standard robot */}
            <div className='r-container'>
              <div className='desc-container'> 
                <h4>Standard (Infantry) Robot</h4>
                <p>
                Standard robots are the agile workhorses of the battlefield, piloted 
                remotely by a human operator. They move quickly on either two or four 
                wheels and fire 17 mm plastic projectiles—each hit dealing around 10 HP 
                of damage. Their high rate of fire and maneuverability make them ideal 
                for field control, objective completion (like activating in‑game power‑ups), 
                and engaging in firefights to support heavier allies .
                </p>
              </div>
              <div className='image-container'>
                <img className="img" src={StandardImg} alt="Sentry" />
              </div>
            </div>
          
            {/* Hero robot */}  
            <div className='r-container'>
              <div className='image-container'>
                <img className="img" src={HeroImg} alt="Sentry" />
              </div>
              <div className='desc-container'> 
                <h4>Hero Robot</h4>
                <p>
                The Hero is the heavy-hitter, also human-controlled, equipped with 
                a much larger 42 mm projectile cannon, often functioning like a tank 
                in 3v3 battles. Its slower fire rate is balanced by the sheer impact—each 
                hit inflicts substantial damage, including the ability to penetrate base 
                defenses or "two‑shot" standard-class bots. It relies on support from 
                other robots for ammo resupply, making team coordination essential.
                </p>
              </div>
            </div>

            {/* Sentry robot */}
            <div className='robot-container'>
              <div className='r-container'>
                <div className='desc-container'> 
                  <h4>Sentry Robot</h4>
                  <p>
                  The Sentry is now a fully mobile, autonomous robot that patrols the 
                  base area using advanced navigation and obstacle avoidance. Equipped 
                  with cameras, LiDAR, and dual 17 mm launchers, it can detect, track, 
                  and engage enemy robots without human input. Its smart targeting and 
                  real-time responsiveness make it a key asset in base defense, freeing 
                  human teammates to focus on offense and strategy.
                  </p>
                </div>
                <div className='image-container'>
                  <img className="img" src={SentryImg} alt="Sentry" />
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default RobotsInfo