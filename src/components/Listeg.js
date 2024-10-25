import React from 'react'
import { users } from '../data/UserData'
export default function Listeg() {

const userjsx = users.map((u)=>{
    return <div className='user'>
        <h2>{u.name} , {u.age} years</h2>
        <p>Contact : {u.contact}</p>
        <p>city : {u.city}</p>
    </div>
})
  return (
    <div className='usercontainer'>
        {userjsx}

    </div>
  )
}
