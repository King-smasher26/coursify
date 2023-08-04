import React, { useEffect, useRef } from 'react';
import "../Page2.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img2 from "../images/fun-3d-cartoon-illustration-indian-businessman 1.png";
import img3 from "../images/flipkart-logo-39906.png";
import img4 from "../images/TCS Tata Consultancy Services.svg"
import img5 from "../images/nvidia-ar21.svg"
import img6 from "../images/amazon-png-logo-vector-6695.png"
import img7 from "../images/infosys-technologies-logo.svg"
import img8 from "../images/Tech_Mahindra-Logo.wine.svg"
import img9 from "../images/accenture-2.svg"
import img10 from "../images/Cognizant-Logo.wine.svg"
gsap.registerPlugin(ScrollTrigger);

export default function Page2() {

  var w = window.innerWidth;
  console.log(w)

  const divref = useRef(null);
  const divrefe = useRef(null);

  useEffect(() => {
    const el = divref.current;
    gsap.fromTo(
      el,
      { x: "-30vw" },
      {
        x: "10vw",
        duration: 1,
        scrollTrigger: {
          trigger: el,
          toggleActions: "restart none none none",
          scrub: 4
        },
      }
    );

  }, [])
  useEffect(() => {
    const el = divrefe.current;
    gsap.fromTo(
      el,
      { x: "-30vw" },
      {
        x: "20vw",
        duration: 1,
        scrollTrigger: {
          trigger: el,
          toggleActions: "restart none none none",
          scrub: 4
        },
      }
    );

  }, [])

  return (
    <div id='total-P2'>
      <div className='textP2' id='P2T1'>
        Transforming Lives & Organisations
      </div>
      <div id='P2D1'>
        <div className='textP2' id='P2T2' ref={divref}>
          We have  constructed a solution for MNCs so that they can hire skilled individuals as Employees based on the job profile and other needs.
        </div>
        <div className='textP2' id='P2T3' ref={divrefe}>As, for the Candidates our Goal is :
          “No skilled individual remains unemployeed.” </div>
        <div id='P2I1'>
          <img className='img2' src={img2} />

        </div>
      </div>
      <div className='thediv'>

      <div id='P2D2'><h1>Many of the World's largest companies rely on FindEMP</h1></div>
      <div id='P2D3'>
        <img className='logo-img' src={img6}/>
        <img className='logo-img' src={img3}/>
        <img className='logo-img' src={img4}/>
        <img className='logo-img' src={img5}/>
        <img className='logo-img' src={img7}/>
      </div>
      <div id='P2D3'>
        <img className='logo-img' src={img8}/>
        <img className='logo-img' src={img9}/>
        <img className='logo-img' id="cog" src={img10}/>
        
      </div>
      </div>
    </div>
  )
}
