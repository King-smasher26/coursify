import React, { useEffect, useState } from 'react'
import "../StepSection.css"
export default function StepSection2() {
  return (
      <div className='StepSection'>
        <div className='section-container'>
        <div id='section-1' className='section-steps'>
                <img className='section-img' src='./images/Candidates.svg'/>
                <div>ACCESS CURATED CANDIDATES</div>
            </div>
            <div id='section-2' className='section-steps'>
                <img className='section-img' src='./images/hire.svg'/>
                <div>HIRE WITHIN 2 WEEKS</div>

            </div>
            <div id='section-3' className='section-steps'>
                <img className='section-img' src='./images/pay.svg'/>
                <div>PAY ONLY IF YOU HIRE</div>
            </div>
            

        </div>
    </div>
  )
}
