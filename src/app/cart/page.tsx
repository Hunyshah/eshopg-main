"use client";
import React from 'react'
import { GlobalContext } from '../context';
import { useContext } from 'react';
const CartPage = () => {
  const {state}= useContext(GlobalContext)
  
  return (
    <div>
      <h1>Cart Page</h1>

  <h3>  Total Price {state.totalAmount} </h3> 
  {state.items.map((item,index)=>{
    return (
    
      <ul key={index}>
        <li>
        {`Title => ${item.title}`}
        </li>
        <li>
        
    {`Price => ${item.price}`}
        </li>
        <li>
          {`qunitity => ${item.amount}`}
        </li>
      </ul>)
      
    
    
      
    
  })}
  

      


    </div>
  )
}

export default CartPage;