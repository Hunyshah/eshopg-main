"use client";
import React, { ReactNode, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "@/app/context";
import AllProducts from "./allproducts";

import MainItem from "./mainitem";


const productsArray = [
  {
    id:'axv45',
    title:'Iphone',
    price:123,
    des:'intersting for use',
    amount:12

  },
  {id:'ax4k52',
    title:'ILAtes',
    price:1789,
    des:'intersting for use but i dont have this',
    amount:17

  }
  ,{id:'ax4b5g6',
    title:'Itel',
    price:1556,
    des:'intersting for use and my own ',
    amount:34

  },{
    id:'ax4n5ui8',
    title:'samsung',
    price:183,
    des:'intersting for use enjoy',
    amount:19

  },
]
type ProductAryType = typeof productsArray
const MainSection = () => {
  const[products,setProducts]=useState<ProductAryType>(productsArray)
  const { state,dispatch } = useContext(GlobalContext);
  
  
  return (
    // es main next component ho ga item list ho ge sath form ho ga
    <>
     <main>

<h4>
  choose best What You like ....
</h4>


  {products.map((item,index)=>{
   return(
    
    <MainItem key={item.id}  title={item.title} des={item.des} price={item.price} id={item.id}/>
  
    
    
  


    
   )
  })}
  

     </main>

      
    </>
  );
};

export default MainSection;
