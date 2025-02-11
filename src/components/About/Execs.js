import React from 'react'
import "./ExecsStyles.css"

const Execs = () => {
  return (
        <div className='section-container center'>
            <h4>Meet Our Executives</h4>
            <p className='subtitle'>Hard-working members who lead our club.</p>
            <div className='execs-container'>
                <div className='execs-card'>
                    <div className='profile-placeholder'></div>
                    <div className='execs-info'>
                        <h5>Edison</h5>
                        <p>Founder/President</p>
                    </div>
                </div>
                <div className='execs-card'>
                    <div className='profile-placeholder'></div>
                    <div className='execs-info'>
                        <h5>Matthew Yuen</h5>
                        <p>Co-Founder/Vice President</p>
                    </div>
                </div>
                <div className='execs-card'>
                    <div className='profile-placeholder'></div>
                    <div className='execs-info'>
                        <h5>Eliana</h5>
                        <p>Former VEX Lead</p>
                    </div>
                </div>
                <div className='execs-card'>
                    <div className='profile-placeholder'></div>
                    <div className='execs-info'>
                        <h5>Victor</h5>
                        <p>Business Lead</p>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Execs