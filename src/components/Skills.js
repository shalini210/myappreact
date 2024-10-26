import React from 'react'
import { skillsdata } from '../data/skillsdata' 
export default function Skills() {
    var skillui = skillsdata.map((s)=>
    {
        return <div>
            <span className='skillname'>{s.name}</span> {s.des}
        </div>
    })
  return (
    <>
    <h1>Skills</h1>
       
       <div className=''>
        {skillui}
    </div>
    </>
  )
}
