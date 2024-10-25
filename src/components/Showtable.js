import React, { useState } from 'react'
export default function Showtable() {
    const [n,setn] = useState(0);
    const [tbl,settbl] = useState("");
    let ftbl=()=>
    {
        let t="";
        for(var i=1;i<=10;i++)
        {
            let f = i* parseInt(n);
            t += f+ "  ";
        }
        settbl(t);
    }
  return (
    <div className='tbl'>
        <p>Enter any no : 
            <input type="text" onChange={(e)=>setn(e.target.value)}/>
        </p>
        <input type="button" value= "show table" onClick={()=>ftbl()}/>  
        <input type="button" value= "show Reverse table" onClick={()=>ftbl()}/>  
        <div>
            {tbl}
            </div>
    </div>

  )
}
