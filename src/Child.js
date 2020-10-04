import React ,{useContext}from 'react';
// import logo from './logo.svg';
import './App.css';
import ValueContext from './ValueContext';
 
  
function Child(props) {

  let value=useContext(ValueContext); 
  return  (
    <div> 
       
  <div> Child number {value}</div>
    </div> )
  
}

export default Child;
