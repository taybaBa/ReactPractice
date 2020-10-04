import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Child from './Child';
 
  
function Parent(props) {
  return  (
    <div> 
       <Child></Child>
      <div>i am  Parent</div>
    </div> )
  
}

export default Parent;
