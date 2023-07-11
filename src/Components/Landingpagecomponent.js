import React, { useEffect } from 'react'
import { useRef } from 'react';
import "../Landingpagecomponent.css"
import img1 from "../images/7800259(2).jpg"
export default function Landingpagecomponent() {
  

  return (
    <div id='Total-land2-div'>
        <div id='LPC1' className='LPC'>
        We are a company that offers hiring solutions for various MNCs and Buisnesses.
            
        </div>
        <div id='LPC2' className='LPC'>
            <img className='img' src={img1}/>
        </div>

    </div>
  )
}
