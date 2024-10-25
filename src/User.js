import React from 'react'

export default function User(props) {
    console.log(props)
  return (
    <div className='user'>
        
        <p>User Name : {props.uname}</p>
        <img height="100" width="100" src={props.uimg}/>
        <p>Age: {props.age}</p>
        <p>Address :{props.address} </p>
        <p>Contact no : {props.contact}</p>
    </div>
  )
}
