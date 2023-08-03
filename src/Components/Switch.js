import React, { useEffect } from 'react'
import "../Switch.css"
import StepSection from './StepSection';
import { useState } from 'react'
import StepSection2 from './StepSection2';
export default function Switch() {
    const [hiring,setHiring]= useState("Candidate");
    const [display,setDisplay]=useState(false);
    function thecheck(){
        
var checkedValue = "off"; 
var inputElements = document.getElementsByClassName('messageCheckbox');
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
}
        if(checkedValue=="off"){
            setHiring("Candidate");
        }
        else{
            setHiring("Employer")
        }

    }
  return (
    <>
    <div className='Switch'>
        <label>
			<input type='checkbox' className='messageCheckbox' onClick={thecheck}/>
			<span className='slider'/>
		</label>
        {/* <div style={{marginTop:"100px"}}><h1>{hiring}</h1></div> */}
    </div>
        <div className='thestepsection'>
        {
            hiring=="Candidate"?<StepSection/>:<StepSection2/>
        }
        <div className='switch-btn'>

        <button>Login</button>
        <button>Signup</button>
        </div>
        </div>
    </>
  )
}
