import { GlobalContext } from '@/app/context';
import React from 'react'

import  { useRef } from 'react'
import { useContext } from 'react';
type ProductTypes = {
    id:string;
    title:string;
    price:number;
    des:string;
}
const MainItem = (props:ProductTypes) => {
  const cartref =  useRef<HTMLInputElement>(null)
const {state,dispatch} = useContext(GlobalContext)

console.log(state.items)
const submitHandler=(e:React.FormEvent )=>{
  e.preventDefault()
  const enterdCartRef = cartref.current?.value
  const numberCartref = parseFloat(enterdCartRef || '');
  console.log(numberCartref)
  {dispatch({type:'ADD',payload:{
    
    title:props.title,
    id:props.id,
    price:props.price,
    disc:props.des,
    amount:numberCartref
  }})}
}
  return (
    <div key={props.id} style={{display:'flex',justifyContent:'space-between'}}>

<ul  >
    <li  >
    {props.title}
    
    <span >  Price :{props.price}</span>
    <span >  Total Amount :{state.totalAmount}</span>
    
    </li>

    </ul>
    <form onSubmit={submitHandler} >
            
            <input ref={cartref}  id='cartform' type="number"  />
            <button  type='submit'>Add to Cart</button>
        </form>
    
    </div>
  )
}

export default MainItem;