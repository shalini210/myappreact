import React from 'react'
import { skillsdata } from '../data/skillsdata' 
export default function Skills() {
    var skillui = skillsdata.map((s)=>
    {
        return <div style={{marginTop:"30px"}}>
            <span className='skillname'>{s.name}</span> {s.des}
        </div>
    })
  return (
    <>
    <div style={{paddingLeft:"50px"}}>
    <h1>Skills</h1>
       <hr></hr>
       <div className=''>
        {skillui}
    </div>
    </div>
    </>
  )
}
