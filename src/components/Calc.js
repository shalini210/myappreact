import React, { useState } from 'react'
import Showtable from './Showtable'
export default function Calc() {
  const [a,seta] = useState(0)
  const [b,setb] = useState(0)
  const [msg,setmsg]=useState("")
  let add = ()=>
  {
let c = parseInt(a) + parseInt(b);
setmsg(" sum is " +c);
  }
  let sub = ()=>
  {
let c = parseInt(a) - parseInt(b);
setmsg(" difference is " +c);
  }
  
  let multi = ()=>
  {
let c = parseInt(a) * parseInt(b);
setmsg(" multiplication  is " +c);
  }
  
  let divide = ()=>
  {
let c = parseInt(a) / parseInt(b);
setmsg(" division  is " +c);
  }
  
    return (
    <div className='calc'>
        <p> Enter a : <input type="text" onChange={(e)=>seta(e.target.value)}/></p>
        <p> Enter b : <input type="text" onChange={(e)=>setb(e.target.value)} /></p>
        <input type="button" value="+" onClick={()=>add()}/>
        <input type="button" value="-" onClick={()=>sub()}/>
        <input type="button" value="*" onClick={()=>multi()}/>
        <input type="button" value="/" onClick={()=>divide()}/>
    <p>{msg}</p>
    <hr></hr>
    <Showtable></Showtable>
    </div>
  )
}
