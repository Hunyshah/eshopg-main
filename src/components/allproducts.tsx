"use client";
import React from "react";
import { useContext } from "react";
import { GlobalContext } from "@/app/context";
import Button from 'react-bootstrap/Button';



const AllProducts = () => {

  const { state,dispatch } = useContext(GlobalContext);
  return <div>
    
    <section>
<h1>Now this is from ALlProducts</h1>
      <button onClick={()=>{

        
        
      }} >
        Add Item
      </button>
      <Button>Bootstrap</Button>
    </section>

  </div>;
  
};

export default AllProducts;
