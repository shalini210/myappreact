import React from 'react'
import {Link} from "react-router-dom"
export default function Menu() {
  return (
    <div><ul>
        <li> 
            <Link to="/skills">skills</Link>
            </li>
        <li> 
        <Link to="/projects">projects</Link></li>
        <li> 
            <Link to="/">Basic info</Link>
        </li>
        {/* <li> <a href='abc.html'>Skills</a></li> */}
        </ul></div>
  )
}
