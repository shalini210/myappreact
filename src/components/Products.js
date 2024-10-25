import React from 'react'
import { products } from '../data/Productdata'
import Counter from './Counter'
export default function Products() {
    const productsui =  products.map((p)=>
    {
        return <div className='product'>
            <img src={p.thumbnail}></img>
            <div>{p.title}</div>
            <div>{p.price}</div>
            <div>{p.category}</div>
            <input type="button" className='btnviewmore' value="view More"/>            
        </div>
    })
 return (
    <div className='productcontainer'>
        {productsui}
    </div>
  )
}
