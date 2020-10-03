 import React, {useState} from 'react';
 
import './App.css';

function Room() {
  let [isLit,setLit]  = useState(false);
  let[age,setAge] = useState(23);
   
  function UpdateLit(){
    console.log("Button Clicked");
    setLit(!isLit)
   
  }
//  const Updateage= ()=>{
//     console.log("increase Age");
//     setAge(++age);
 
    
//   }
  return  (
    <div> 
      This is room    {isLit? "lit" :"dark"}
      <br/>
      Age : {age}
      <br/>
      <button onClick={UpdateLit}>Toggle Light
        </button>
        {/* -------------other way of writing function---------- */}
        <button onClick={()=>{
              console.log("increase Age")
              setAge(++age);
        } }> Increase Age
        </button>

    </div> );
}
  

export default Room;
