import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './image.css';
import slide1 from  '../Images/slide1.jpg'
import slide2 from '../Images/slide2.jpeg'
import slide3 from '../Images/slide3.jpeg'
const slideImages = [
  slide1,
  slide2,
  slide3
  
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Portfolio = () => {
    return (
      <Slide {...properties}>
        
        <div className="each-slide">
         
	
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          <p class="main">WEB DEVELOPER</p>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
          <p class="main">REACT</p>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          <p class="main">STUDENT</p>
          </div> 
          </div>
        
        
      </Slide>
    )
}
export default Portfolio;