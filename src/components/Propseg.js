import React from 'react'

export default function Propseg(props) {
    let clr = props.colorName;
  return (
    <>    
    <input  type="button" 
    style={{height:"50px",width:"50px",
    backgroundColor:clr}}
     onClick={()=>props.changeColor(clr)}></input>
    </>
  )
}
