import React, { useRef, useState } from 'react'

export default function Usingref() {
    let nameref = useRef("");
    let cityref = useRef("");
    let msgref = useRef("");
    let welcome=()=>
    {
        let x = nameref.current.value;
        let m = "welcome "+ x+ " City is "+ cityref.current.value
        msgref.current.innerHTML = m
    }
  return (
    <>
      <p>Enter Name : <input type="text" ref={nameref}/></p>
    <p>Enter city : <input type="text" ref={cityref}/></p>
     <input type="button" value="click here " onClick={()=>welcome()}/>
        <h1 ref={msgref}></h1>
</>

  )

}
