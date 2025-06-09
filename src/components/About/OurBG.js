import React from 'react'
import "./OurBGStyles.css"
import Img1 from "./about_images/IMG_9708.jpg"


const OurBG = () => {
  return (
    <div className='main-container'>
        <div className='OBG-container section-container'>
            <div className='desc-container'>
                <div className='BG-container'>
                    <h4>Our Background</h4>
                    <p>
                        Founded in 2023, the SFU Robotics Club (SFURC) was built 
                        from a shared passion for innovation, hands-on learning, 
                        and the belief that robotics should be accessible to all. 
                        In just a short time, we've grown into SFU’s leading robotics 
                        organization, uniting students from diverse disciplines to learn, 
                        build, and compete together. What began as a small group of 
                        enthusiasts has evolved into a thriving community that takes pride 
                        in mentoring newcomers, advancing technical skills, and pushing the 
                        boundaries of what’s possible in robotics.
                    </p>
                </div>
                <div className='MS-container'>
                   <h4>Our Mission</h4>
                    <p>
                    At SFURC, our mission is to empower students of all backgrounds and 
                    skill levels to explore robotics through collaboration, mentorship, 
                    and real-world challenges. We strive to foster a supportive environment 
                    where members can gain hands-on experience, tackle ambitious projects, 
                    and represent SFU on global stages such as the RoboMaster competition. 
                    By combining technical excellence with teamwork and creativity, 
                    we aim to develop the next generation of innovators, leaders, and problem solvers.
                    </p> 
                </div>
            </div>
            <div className='img-container'>
                <img className="img" src={Img1} alt='Img1'></img>
            </div>
        </div>
    </div>
  )
}

export default OurBG