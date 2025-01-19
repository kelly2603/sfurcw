import React from 'react'
import "./ExecsStyles.css"

const Execs = () => {
  return (
    <div className='main-container'>
        <div className='section-container EX-container'>
            
            <div className='execs-container'>
                <div className='execs-card'>
                    <h5>Edison</h5>
                    <p>Founder/President</p>
                </div>
                <div className='execs-card'>
                    <h5>Matthew Yuen</h5>
                    <p>Co-Founder/Vice President</p>
                </div>
                <div className='execs-card'>
                    <h5>Eliana</h5>
                    <p>Former VEX Lead</p>
                </div>
                <div className='execs-card'>
                    <h5>Victor</h5>
                    <p>Business Lead</p>
                </div>
            </div>
        
            <div className='desc-container'>
                <h4>Meet Our Executives</h4>
                <p>Our executives are hard-working members who lead the our club.</p>
            </div>
        </div>
    </div>
    
  )
}

export default Execs