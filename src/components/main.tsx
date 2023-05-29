"use client";
import React, { ReactNode } from "react";
import { useContext } from "react";
import { GlobalContext } from "@/app/context";
const MainSection = () => {
  const { totalAmount,adding } = useContext(GlobalContext);
  return (
    // es main next component ho ga item list ho ge sath form ho ga
    <>
      <button onClick={()=>{adding(1)}}>MainSection</button>
      <h1>{totalAmount}</h1>
    </>
  );
};

export default MainSection;
