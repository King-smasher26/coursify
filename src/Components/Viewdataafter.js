import React, { useState } from 'react'
import { data } from '../Data'
import "../Viewdata.css"
import { useLocation } from 'react-router-dom';
export default function Viewdataafter(props) {
    const location = useLocation();
    var recievedprop=location.state;
    console.log("the gender is"+recievedprop.gender);
    console.log("the Count  ry is"+recievedprop.Country);
    var alldata;
    alldata = data.map((    obj)=>{
        return <tr>
            <td>{obj.id}</td>
            <td>{obj.first_name}</td>
            <td>{obj.last_name}</td>
            <td>{obj.email}</td>
            <td>{obj.gender}</td>
            <td>{obj.Country}</td>
            <td>{obj.Job_profile}</td>
        </tr>
    })
    
  return (
    <div id='viewdataafter'>
    <div id='potemp'>Potential candidate List</div>
    <table className='emp-data-table'>
        <tr>

        {/* <th>S no.</th> */}
        <th>F. Name</th>
        <th>L. Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Country</th>
        <th>Job profile</th>
        </tr>
            {data.map((obj)=>{
                if(recievedprop.gender=="any"){
                    if((obj.Country==recievedprop.Country)&&(obj.Job_profile==recievedprop.Jobprof)){
                        return <tr>
            {/* <td>{obj.id}</td> */}
            <td>{obj.first_name}</td>
            <td>{obj.last_name}</td>
            <td>{obj.email}</td>
            <td>{obj.gender}</td>
            <td>{obj.Country}</td>
            <td>{obj.Job_profile}</td>
        </tr>
                    }
                }
                
        else{

            if((obj.gender==recievedprop.gender)&&(obj.Country==recievedprop.Country)&&(obj.Job_profile==recievedprop.Jobprof)){
                
                return <tr>
            {/* <td>{obj.id}</td> */}
            <td>{obj.first_name}</td>
            <td>{obj.last_name}</td>
            <td>{obj.email}</td>
            <td>{obj.gender}</td>
            <td>{obj.Country}</td>
            <td>{obj.Job_profile}</td>
        </tr>
        }
    }
    })}
    </table>
    </div>
    )
}
