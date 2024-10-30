import React from 'react'
import { products } from '../data/Productdata'
import {Link} from "react-router-dom"
export default function Categories() {
var categories = [];
products.map((product)=>
{
    if(!categories.includes(product.category))
    {
        categories.push(product.category);
    }    
})
var categoriesUI = categories.map((c)=>
{
    return  <div>
        <Link to={"/Products/"+c}>{c}</Link>
    </div>
})
  return (
    <div>{categoriesUI}</div>
  )
}
