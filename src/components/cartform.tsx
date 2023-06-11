// import React, { useRef } from 'react'
// import { GlobalContext } from '@/app/context'
// import { useContext } from 'react'

// type PropsPArent ={
//   selectedCartValue:(data:number)=>void;
// }

// const CartForm = (props:PropsPArent) => {
//   const {dispatch}= useContext(GlobalContext)
//    const cartref =  useRef<HTMLInputElement>(null)
   
//    const submitHandler=(e:React.FormEvent )=>{
//      e.preventDefault()
//      const enterdCartRef = cartref.current?.value
//      const numberCartref = parseFloat(enterdCartRef || '');
//      props.selectedCartValue(numberCartref)
     
     
     
     
   
//    }
//   return (
//     <div>
//         <form onSubmit={submitHandler} >
            
//             <input ref={cartref}  id='cartform' type="number"  />
//             <button  type='submit'>Add to Cart</button>
//         </form>
//     </div>
//   )
// }

// export default CartForm