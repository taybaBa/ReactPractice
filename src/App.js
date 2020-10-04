import React ,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
 
  import Parent from './Parent'
function App() {
  let [number,setNumber]= useState(45);
  return  (
    <div> 
       Hellow i am App
       <Parent num={number}></Parent>
       <button onClick={()=>{setNumber(++number)}} > Update num</button>

    </div> )
  
}

export default App;
