import React from "react";
import Image from '../Images/tayba.jpeg';
import './image.css';
 
function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
           <div class="sidebar">
            <img
            // height={220}
            // width={190}
            
                className="img-size"
              src={Image}
              alt="Tayyba"
              
            />
            <p>Tayyba</p>
             </div>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
		Helow My name is Tayyba and i like to make websites. Currently i am learning web designing in react.</p>
<p> And i hope it will be a fun. </p>

          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
