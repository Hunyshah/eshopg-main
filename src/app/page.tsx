"use client";
// import Image from 'next/image'
// import styles from './page.module.css'
import HeaderMain from "@/components/header";
import MainSection from "@/components/main";
import ContextProvider from "@/app/context";
import { ReactElement } from "react";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <MainSection />
    </>
  );
}
