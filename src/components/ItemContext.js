import React , {createContext, useState} from "react";
import {cartItems} from "./cart-items.js"


export const ItemContext = createContext()


export const ItemProvider = props =>{
    
    const [items, setItems] = useState(cartItems);
    
    
    
    return (
      <ItemContext.Provider value = {[items,setItems]}>
          {props.children}
      </ItemContext.Provider>
    );
}


