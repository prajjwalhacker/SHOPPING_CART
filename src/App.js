//eslint-disable-next-line
import React, {useContext, useState} from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import {cartItems} from "./components/cart-items"

import {ItemContext} from "./components/ItemContext"

import {ValueProvider} from "./components/CartContext";

import {DataProvider}  from "./components/valContext";

function App(){
  // cart setup
    
  const [items, setItems] = useContext(ItemContext);
  ////console.log(items)
  return(
      <ValueProvider>
            <Navbar/>
            <DataProvider>
            <CartContainer cart={items}/>
            </DataProvider>
     </ValueProvider>
  );

}

export default App;
