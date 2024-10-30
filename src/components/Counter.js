import { useState } from "react";
export default function Counter() {
  const [count,setcount] = useState(0);
  let increment=()=>
  {
    let x = count;
    x++;
    setcount(x);
  }
  let decrement=()=>
  {
    let x = count;
    x--;
    setcount(x)
  }
  let cnt = <div className="countergroup">{count>0?<input type="button" value="-" onClick={()=>decrement()}>

  </input>:<input type="button" value="-" disabled></input>}
  <div>{count}</div>
  {count<5?<input type="button" value="+" onClick={()=>increment()}></input>:
  <input type="button" value="+" disabled></input>}
  </div>
return(
  <>
  
  {count<=0?<input type="button" value="Add to Cart" className="btn btnaddcart" 
  onClick={()=>setcount(1)}/>:cnt}
  </>
)

}
