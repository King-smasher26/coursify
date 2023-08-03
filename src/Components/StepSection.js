import React, { useEffect, useState } from 'react'
import "../StepSection.css"
export default function StepSection() {
  return (
      <div className='StepSection'>
        <div className='section-container'>
        <div id='section-1' className='section-steps'>
                <img className='section-img' src='./images/profile.svg'/>
                <div>COMPLETE PROFILE</div>
            </div>
            <div id='section-2' className='section-steps'>
                <img className='section-img' src='./images/offers.svg'/>
                <div>RECEIVE JOB OFFERS</div>

            </div>
            <div id='section-3' className='section-steps'>
                <img className='section-img' src='./images/job.svg'/>
                <div>ACCEPT DREAM JOB</div>

            </div>
            

        </div>
    </div>
  )
}
