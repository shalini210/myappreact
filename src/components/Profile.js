import React from 'react'
import userimg from "../images/user1.jpeg"
import {Link} from "react-router-dom"
export default function Profile() {
  return (
    <div className='sidebar'>
        <div className='center'>
        <img src={userimg} className="profileimg"></img>
        <div>Ian Dunkerley</div>
            <div> Software Developer</div>

            </div>
            <p>
            My name is Ian Dunkerley, a front-end developer based in Torquay, Devon, UK. I have worked on a wide range of front-end projects, from DJ applications to eCommerce 
            </p>
            
        <ul className='nav'>
            <li><Link className='nav-link' to="/">Basic info</Link></li>
            <li><Link to="skills" className='nav-link'>Skills</Link></li>
            <li><Link to="projects" className='nav-link'>Projects</Link></li>
        </ul>
    </div>
  )
}
