import React ,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
 import ValueContext from './ValueContext.js'
  import Parent from './Parent'
function App() {
  //let [number,setNumber]= useState(45);
  let value=77
  return  (
    <ValueContext.Provider value={value}>
    <div> 
       Hellow i am App
       <Parent ></Parent> 
       {/* <button onClick={()=>{setNumber(++number)}} > Update num</button> */}

    </div> 
    </ValueContext.Provider>)
  
}

export default App;
