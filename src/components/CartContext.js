// eslint-disable-next-line
import React, {useState, createContext} from "react";

export const CartContext = createContext();

export const ValueProvider = props =>{
       const [value, setValue] = useState(0);

       return (
         <CartContext.Provider value = {[value, setValue]}>
             {props.children}
         </CartContext.Provider>
       );
}
