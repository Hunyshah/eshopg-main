"use client";
import Link from 'next/link';
import React from 'react'
import classes from './header.module.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {GlobalContext} from '@/app/context';
import { useContext } from 'react';

type BasicItemTypes = {
  title: string;
  disc: string;
  price: number;

};
const HeaderMain = () => {
const {state,dispatch}= useContext(GlobalContext)

const badgenumber = state.items.reduce((prev,item)=>{
  console.log("reduce method output in prev value   "+prev+"<><><><> and item object"+JSON.stringify(item))
    return (prev + item.amount)
  

},0)
console.log(badgenumber)
console.log(state.totalAmount)
  return (
    <>
    
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Next - TypeScript</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{display:'flex',alignItems:'center'}}>
          
            <Link style={{textDecoration:'none',color:'black' ,marginRight:'1rem'}} href={'/'}>Home Page</Link>
            <Link href={'about'} style={{textDecoration:'none',color:'black' ,marginRight:'1rem'}}> about Page</Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Link href={'cart'} style={{textDecoration:'none',color:'black' ,marginRight:'1rem'}}> <button>Add Cart</button><span>{badgenumber}</span></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}


    
 

export default HeaderMain;


{/* <div className={classes.parentdiv} >
        <Link style={{textDecoration:'none',color:'black'}} href={'/'}>Home Page</Link>
        
        <Link href={'about'}> about Page</Link>

        <button>
            Add to Cart
        </button>
    </div>
    </> */}