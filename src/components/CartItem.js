// eslint-disable-next-line
import React, {useContext , useState} from "react";

import {CartContext} from "./CartContext.js"

import {ItemContext} from "./ItemContext"

import {ValueContext}  from "./valContext";


const CartItem = ( props ) => {
  
  const [value, setValue] = useContext(CartContext); 
  /////const [myval, setMyval] = useState(0);
  const [items, setItems] = useContext(ItemContext);
  const [arr,setArr] = useContext(ValueContext);

  //console.log(arr);
  function Func(){
    const index = items.map(x => {
      return x.id;
    }).indexOf(props.item.id);
    for(let i=index;i<(items.length-1);i++){
      const temp = items[i];
      items[i] = items[i+1];
      items[i+1] = temp;
  }
  setItems(items.splice(0,items.length-1));
}

  function setToZero(){
     
      if(props.item.id === 1){
        setArr([0,arr[1],arr[2]]);
      }
      if(props.item.id === 2){
        setArr([arr[0],0,arr[2]]);
      }
      if(props.item.id === 3){
        setArr([arr[0],arr[1],0]);
      }

  }  

  function Increase(){
    if(props.item.id === 1){
      setArr([arr[0]+1,arr[1],arr[2]]);
    }
    if(props.item.id === 2){
      setArr([arr[0],arr[1]+1,arr[2]]);
    }
    if(props.item.id === 3){
      setArr([arr[0],arr[1],arr[2]+1]);
    }
  }
  function Decrease(){
    if(props.item.id === 1){
      setArr([arr[0] > 0 ? arr[0]-1 : arr[0],arr[1],arr[2]]);
    }
    if(props.item.id === 2){
      setArr([arr[0],arr[1] > 0 ? arr[1]-1 : arr[1],arr[2]]);
    }
    if(props.item.id === 3){
      setArr([arr[0],arr[1],arr[2] > 0 ? arr[2]-1 : arr[2]]);
    }
  }


  return (
    <div className="cart-item">
      <img src={props.item.img} alt={props.item.title} />
      <div>
        <h4>{props.item.title}</h4>
        <h4 className="item-price">${props.item.price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick = {() => { Func(); setValue(value-arr[props.item.id-1]); setToZero(); }}>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn"  onClick = {() => {setValue(value+1); Increase()}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{arr[props.item.id-1]}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick = { () => {  setValue( arr[props.item.id-1] > 0 ? value-1 : value); Decrease()}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
