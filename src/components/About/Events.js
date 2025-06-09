import React from 'react'
import "./EventsStyles.css"
import RMLogoImg from "./about_images/rmlogo.jpg"

const Events = () => {
  return (
    <div className='section-container center'>
      <h4>Upcoming Events</h4>
      <p className='subtitle'>Exciting events ahead!</p>
      <div class="event-grid">
        <div class="event-card">
          <img src={RMLogoImg} alt="Robomaster Image" class="event-image" />
          <div class="event-content">
            <h5 class="event-title">RoboMaster University Championship (RMUC)</h5>
            <p class="event-description">The long awaited competition that we all work day and night for!</p>
            <div class="event-details">
              <span><strong>Time:</strong> June 22 - June 29, 2025</span>
              <span><strong>Location:</strong> Colorado, US </span>
            </div>
          </div>
        </div>

        {/* <div class="event-card">
          <img src="event2.jpg" alt="Competition Info Session" class="event-image" />
          <div class="event-content">
            <h5 class="event-title">Team Meeting</h5>
            <p class="event-description"></p>
            <div class="event-details">
              <span><strong>Time:</strong> Everyday, 12:00-8:00 PM</span>
              <span><strong>Location:</strong> SFU Surrey</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Events