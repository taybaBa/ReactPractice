import React from "react";
import Image from '../Images/tayba.jpeg';
import Button from 'react-bootstrap/Button';
import './image.css';
function Contact() {
  return (
    <div className="contact">
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
            <h1 class="font-weight-light">Contact</h1>
            <p> If you ever need to contact me or book an appointment then please get in touch with us.I prefer contact by phone but e-mail is also fine</p>	
            <h2>I'd love to hear from you!</h2>
            {/* <a href="mailTo:taybabashir20@gmail.com" class="contactButton">GET IN TOUCH!</a> */}
            <Button href="mailTo:taybabashir20@gmail.com" variant="outline-success">GET IN TOUCH!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
