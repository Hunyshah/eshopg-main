"use client";
import { ReactElement, ReactNode, createContext, useReducer, useState } from "react";
type BasicItemTypes = {
  title: string;
  disc: string;
  price: number;

};

type ContextStateType = {
  items: BasicItemTypes[];
  totalAmount: number 
  adding:(a:number)=>void
};
type ActionType = {
  type:'ADD';
  payload:number
}
const reducerMethod = (state:ContextStateType ,action:ActionType):ContextStateType=>{
if (action.type === 'ADD'){
  console.log("working reducer add method")
console.log(action.payload)
  return {...state ,totalAmount:state.totalAmount + action.payload}
  
}
return state
}
let sopa:(a:number)=>void = (x:number)=>{return "Not Intilized"}
const InitialState: ContextStateType = { items: [], totalAmount: 0,adding:sopa };

export const GlobalContext = createContext<ContextStateType>(InitialState);
// type ChildrenType = { children?: ReactElement | ReactElement[] };
type ChildrenType = {
  children?: ReactNode;
};

const ContextProvider = ({ children }: ChildrenType) => {
  const fullContext: ContextStateType = InitialState;
  const[reducerState,dispatch]=useReducer(reducerMethod,InitialState)
  // const[fullstate,setfullstate]=useState<ContextStateType>(InitialState)
  sopa = (a:number)=>{
    console.log("not working ")
    dispatch({type:'ADD',payload:a})
  }

  return (
    <GlobalContext.Provider value={reducerState}>
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
