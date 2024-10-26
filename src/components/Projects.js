import React from 'react'

export default function Projects() {
  const projects = [
    {projectname:"Project 1" , duration :" 3 months",
   role: " Designer",technologies:"Bootstrap Tailwind React", des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "}
  ,
  {projectname:"Project 2" , duration :" 6 months",
  role: "jr Developer",technologies:"Java Angular", des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "}
,
{projectname:"Project 3" , duration :" 4 months",
   role: "jr developer",technologies:"Java spring React", des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "}
  ,{projectname:"Project 4" , duration :" 8 months",
  role: "Designer nad jr developer",technologies:"Bootstrap Tailwind React java spring", des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "}
,
];
var projectsui = projects.map((project)=>
{
  return <div className='project'>
    <div className='pname'>{project.projectname}</div>
    <div><b>duration</b> : {project.duration}</div>
    <div><b>technologies</b> : {project.technologies}</div>
    <div><b>role</b>: {project.role}</div>
    <div><b>description </b>: {project.des}</div>
  </div>

})
  return (
    <>
    <h1 style={{textAlign:"center"}}>Projects</h1>
    <div className='projectcontainer'>
    {projectsui}</div>
    </>
  )
}
