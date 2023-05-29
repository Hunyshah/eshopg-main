import Link from 'next/link';
import React from 'react'
import classes from './header.module.css'
const HeaderMain = () => {
  return (
    <>
    <div className={classes.parentdiv} >
        <Link style={{textDecoration:'none',color:'black'}} href={'/'}>Home Page</Link>
        
        <Link href={'about'}> about Page</Link>

        <button>
            Add to Cart
        </button>
    </div>
    </>
  )
}

export default HeaderMain;