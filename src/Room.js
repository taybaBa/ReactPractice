 import React, {useState} from 'react';
 import './Room.css';
import './App.css';

function Room() {
  let [isLit,setLit]  = useState(false);
  let [on,setOn]=useState(false);
   let [temp ,settemp]=useState(22);
  let[age,setAge] = useState(23);
   
  function UpdateLit(){
    console.log("Button Clicked");
    setLit(!isLit)
   
  }
  function LightOn(){
    console.log("Button Clicked");
    setOn(!on)
   settemp(37);
  }
  function LightOff(){
    console.log("Button Clicked");
    setOn(!on)
    settemp(22);
   
  }
  function ageincrease(){
    console.log("Button Clicked");
     setAge(++age)
   
  }
  function agedec(){
    console.log("Button Clicked");
    setAge(age--)
   
  }
//  const Updateage= ()=>{
//     console.log("increase Age");
//     setAge(++age);
 
    
//   }
  return  (
  
    // eslint-disable-next-line no-template-curly-in-string
    <div className={`room  ${isLit? "lit": "dark"}`}> 
      This is room    {isLit? "lit" :"dark"}
      <br/>
      Age : {age}
      <br/>
      <button onClick={UpdateLit}>Toggle Light
        </button>
        <br/>
        <div className={`room1  ${on? "on": "off"}`}> 
       Light is {on? "on" :"Off"}
       <br/>
       Temperature is :  {temp}
       <br/>
       <button onClick={LightOn}>On
        </button>
        <button onClick={LightOff}>OFF
        </button>
        <button onClick={ageincrease}>+
        </button>
        <button onClick={agedec}>-
        </button>
        </div>
        <br/>
        {/* -------------other way of writing function---------- */}
        <button onClick={()=>{
              console.log("increase Age")
              setAge(++age);
        } }> Increase Age
        </button>

    </div> );
}
  

export default Room;
