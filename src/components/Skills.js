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
    <div>Skills:
        <br></br>
        {skillui}
    </div>
  )
}
