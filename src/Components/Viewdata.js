import React, { useState } from 'react'
import { data } from '../Data'
import { Outlet, Route , Routes} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../Viewdata.css"
import Viewdataafter from './Viewdataafter';
import { Link } from 'react-router-dom';
export default function Viewdata() {
  // function scroller(){
  //   window.scrollTo(0,0);
  // }
  // setTimeout(scroller, 500);
  // const sentdata = {
  //   gender:"M",
  //   Country:"Marshall Islands"
  // }
    const [userRegistration,setuserRegistration]= useState({
      gender:'any',
      Country:"Marshall Islands",
      Jobprof:"Budget/Accounting Analyst IV"
    }); 
    const handleInput = (e)=>{
      const name=e.target.name;
      const value=e.target.value; 
      
      setuserRegistration(
        prev=>{
          return {...prev,[name]:value}
        }
        )
      }
      const handleSubmit = (e)=> {
      const newrecord= {...userRegistration}
      console.log(newrecord)
      e.preventDefault();

    }
  return (

    <div className='viewdatadiv'>
    <div id='FindEmpText'>Find Your Employee</div>
    <form>
      <div className='selection-div'>

  <label for="gender">Choose a gender:  </label>
  <select id="gender" name="gender" onChange={handleInput}>
    <option value="M">Male</option>
    <option value="F">Female</option>
  </select>
      </div>
      <div className='selection-div'>

  <label for="Country">Choose a Country:  </label>
  <select id="Country" name="Country" onChange={handleInput}>
    <option value="Marshall Islands">Marshall Islands</option>
    <option value="United States">United States</option>
    <option value="Albania">Albania</option>
    <option value="Philippines">Philippines</option>
    <option value="Russia">Russia</option>
    <option value="Colombia">Colombia</option>
    <option value="Peru">Peru</option>
    <option value="Cuba">Cuba</option>
    <option value="Brazil">Brazil</option>
    <option value="Portugal">Portugal</option>
    <option value="Luxembourg">Luxembourg</option>
    <option value="Myanmar">Myanmar</option>
    <option value="Vietnam">Vietnam</option>
    <option value="Bulgaria">Bulgaria</option>
    <option value="South Africa">South Africa</option>
    <option value="France">South Africa</option>
  </select>
      </div>
    <div className='selection-div'>
    <label for="Jobprof">Choose a Job Profile:  </label>
  <select id="Jobprof" name="Jobprof" onChange={handleInput}>
    <option value="Budget/Accounting Analyst IV">Budget/Accounting Analyst IV</option>
    <option value="Biostatistician I">Biostatistician I</option>
    <option value="Research Assistant II">Research Assistant II</option>
    <option value="Biostatistician I">Biostatistician I</option>
    <option value="Senior Editor">Senior Editor</option>
    <option value="Senior Quality Engineer">Senior Quality Engineer</option>
    <option value="Electrical Engineer">Electrical Engineer</option>
    <option value="Senior Sales Associate">Senior Sales Associate</option>
    <option value="Financial Analyst">Financial Analyst</option>
    <option value="Analyst Programmer">Analyst Programmer</option>
    <option value="Operator">Operator</option>
  </select>

    </div>
  {/* <Link onClick={handleSubmit} to="/afterdata">Viewdataafter</Link> */}
  {/* <input type="submit" onClick={handleSubmit}/> */}
  <div id='toclickres'>
    
  <Link className='resultpage' to='/thisisres' state={userRegistration}>Find Candidate</Link>
  </div>
</form>
    </div>
  )
}
