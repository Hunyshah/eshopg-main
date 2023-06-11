"use client";

import { ReactElement, ReactNode, createContext, useReducer, useState } from "react";
type BasicItemTypes = {
  id:string;
  title: string;
  disc: string;
  price: number;
  amount:number;

};

// const items:BasicItemTypes = [{title:'not title',disc:'no disc',price:12}]

type ContextStateType = {
  items: BasicItemTypes[];
  totalAmount: number 
  // adding:(a:number)=>void
};
type ActionType = {
  type:'ADD';
  payload:{title: string;
    id:string;
    disc: string;
    price: number;
    amount:number}
}
const reducerMethod = (state:ContextStateType ,action:ActionType):ContextStateType=>{
if (action.type === 'ADD'){
  const totalAmount = state.totalAmount + action.payload.price * action.payload.amount
  console.log("working reducer add method")
  const existingItemIndex = state.items.findIndex((item)=>item.id === action.payload.id)
  const existingItem = state.items[existingItemIndex]
  let updatedItems:BasicItemTypes[]
  if (existingItem){
    const updatedvalue = {...existingItem,amount:existingItem.amount + action.payload.amount}
   updatedItems = [...state.items]
    updatedItems[existingItemIndex] = updatedvalue
  }
  else {

     updatedItems= state.items.concat(action.payload)
  }

   

  return {...state ,items:updatedItems,totalAmount:totalAmount}

  


}
return state
}
// let sopa:(a:number)=>void = (x:number)=>{return "Not Intilized"}
const InitialState: ContextStateType = { items: [], totalAmount: 0, };

export const GlobalContext = createContext<{state:ContextStateType,dispatch:React.Dispatch<ActionType>}>({state:InitialState,dispatch:()=>{}});
// type ChildrenType = { children?: ReactElement | ReactElement[] };
type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

const ContextProvider  = ({ children }: ChildrenType) => {
  // const fullContext: ContextStateType = InitialState;
  const[state,dispatch]=useReducer(reducerMethod,InitialState)
  console.log(state)
  // const[fullstate,setfullstate]=useState<ContextStateType>(InitialState)
  

  return (
    <GlobalContext.Provider value={{state,dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};
export default ContextProvider;

// "use client";

// import { ReactElement, createContext, useState } from "react";
// type ObjType = { names: string };
// export const ThemeContext = createContext<ObjType>({ names: "" });
// type ChildrenType = { children?: ReactElement | ReactElement[] };
// export default function ThemeProvider({ children }: ChildrenType) {
//   const [dta, setdta] = useState<ObjType>({ names: "honey" });
//   return <ThemeContext.Provider value={dta}>{children}</ThemeContext.Provider>;
// }
