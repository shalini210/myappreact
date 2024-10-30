import React from 'react'
import { useParams } from 'react-router'
import { products } from '../data/Productdata'
import Counter from './Counter'
export default function Products() {
    let params = useParams();
    let cname = params.cname;
    const productsfiltered =  products.filter((p)=>( p.category == cname));
    const productsui = productsfiltered.map((p)=>
    {
        return <div className='product'>
            <img src={p.thumbnail}></img>
            <div>{p.title}</div>
            <div>{p.price}</div>
            <div>{p.category}</div>
            <input type="button" className='btn btnviewmore' value="view More"/>         
            <Counter></Counter>   
        </div>
    })
 return (
    <>
    {cname}
    <div className='productcontainer'>
        {productsui}
    </div>
    </>
  )
}
