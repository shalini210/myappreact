import React from 'react'

export default function ChangeSize(props) {
    let s = props.size;
  return (
    <div>
 <input type="button"
  value={s} onClick={()=>props.sizef(s)}/>
    </div>
  )
}
