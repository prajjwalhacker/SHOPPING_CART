import React , {createContext, useState} from "react";



export const ValueContext = createContext()




export const DataProvider = props =>{
    
    const [arr,setArr] = useState([0,0,0])
    
    
    
    return (
      <ValueContext.Provider value = {[arr,setArr]}>
          {props.children}
      </ValueContext.Provider>
    );
}

