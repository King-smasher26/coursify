import React, { useEffect, useState } from 'react'
import "../StepSection.css"
export default function StepSection2() {
  return (
      <div className='StepSection'>
        <div className='section-container'>
        <div id='section-1' className='section-steps'>
                <img className='section-img' src='./images/profile.svg'/>
                <div>Thiesdfa</div>
            </div>
            <div id='section-2' className='section-steps'>
                <img className='section-img' src='./images/offers.svg'/>
                <div>asdfadfs</div>

            </div>
            <div id='section-3' className='section-steps'>
                <img className='section-img' src='./images/job.svg'/>
                <div>ACCEPT DREAM sadfasdfasJOB</div>
            </div>
            

        </div>
    </div>
  )
}
