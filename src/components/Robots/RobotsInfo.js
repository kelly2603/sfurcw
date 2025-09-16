import React from 'react'
import "./RobotsInfoStyles.css"
import Img1 from "./robots_images/IMG_2346.jpg"
import StandardImg from "./robots_images/IMG_6720.jpg"
import HeroImg from "./robots_images/IMG_6798.jpg"
import SentryImg from "./robots_images/IMG_6802.jpg"
import EngineerImg from "./robots_images/engineerrobo.png"
import DartImg from "./robots_images/dartrobo.png"

const RobotsInfo = () => {
  return (
    <div className='main-container'>
        <div className='section-container'>

            {/* Standard robot */}
            <div className='r-container'>
              <div className='desc-container'> 
                <h4>Infantry Robot</h4>
                <p>
                The infantry robot is the most impactful robot on the battlefield, piloted remotely by a human operator from a first-person POV. They fire 17 mm plastic projectiles at very high speed, each hit dealing small amounts of damage. Their high rate of fire and maneuverability make them ideal for controlling the field, moving and shooting, and being the main offense. The goal of our infantry team is to be able to aim and shoot consistently at the enemy referee modules, to bring down their virtual HP and take them down with a barrage of bullets. We implement spin to win and well-timed movements to dodge enemy shots while still having a stable turret to fire back.
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
                The Hero is the team’s heavy-hitter, functioning like a sniper in 3v3 battles. It is manually controlled and uses 42 mm projectiles to shoot, capable of dealing large damage with each shot, enough to two-shot standard Infantry robots or breach enemy base defenses in 7v7, making it essential for late-game pushes. Unlike the rapid-fire Infantry, the Hero relies on slow, high-damage shots, so accuracy and timing are important. Its larger size and slower fire rate make it a target and vulnerable to the faster robots, so it relies on the rest of the team for protection.
                </p>
              </div>
            </div>

            {/* Sentry robot */}
            <div className='robot-container'>
              <div className='r-container'>
                <div className='desc-container'> 
                  <h4>Sentry Robot</h4>
                  <p>
                    The Sentry is a fully mobile, autonomous robot that can patrol key areas using pathfinding algorithms and computer vision. Equipped with cameras, LiDAR, and dual 17 mm launchers, it can detect, track, and engage enemy robots without human input. Its smart targeting and real-time responsiveness make it a key asset in defense, freeing human teammates to focus on offense and strategy. Having a strong sentry is most of the time what separates the top teams from the rest, as in the 3v3 game, the sentry is a third of your team and vital for holding out contested areas.
                  </p>
                </div>
                <div className='image-container'>
                  <img className="img" src={SentryImg} alt="Sentry" />
                </div>
              </div>
            </div>

            {/* Engineer robot */}  
            <div className='r-container'>
              <div className='image-container'>
                <img className="img" src={EngineerImg} alt="Engineer" />
              </div>
              <div className='desc-container'> 
                <h4>Engineer Robot (In Development)</h4>
                <p>
                The engineer robot is a payload carrying robot that picks up and transfers multiple cube payloads called ‘ores’ around a designated Point A and Point B. Ores are colour coded with either a white or yellow surface, with yellow indicating a higher point return when an engineer task is complete. The robot is responsible for accurately placing said ores onto a given cube slot and is manually driven by a team member. It consists of an upper and lower section with the upper section of the robot containing an ‘arm’ mechanism responsible for picking up the payloads and the lower section containing a chassis responsible for the general movement of the whole robot. 
                </p>
              </div>
            </div>

            {/* Dart System */}
            <div className='robot-container'>
              <div className='r-container'>
                <div className='desc-container'> 
                  <h4>Dart System (In Development)</h4>
                  <p>
                  The Dart System is comprised of two components: The Dart Launcher and the Dart Projectile. The launcher uses flywheels or stored kinetic energy to launch a dart to impact the enemy's outposts. The Dart runs an on-board guidance system using cameras and actuators for automatic target tracking. There are four darts available to fire per match, and two opportunities to fire: 30 seconds after the match starts, and the second after 4 minutes. A successful hit on the enemy's outpost will blind their robots for up to 15 seconds, offering openings for our robots to engage in battle.
                  </p>
                </div>
                <div className='image-container'>
                  <img className="img" src={DartImg} alt="Dart System" />
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default RobotsInfo