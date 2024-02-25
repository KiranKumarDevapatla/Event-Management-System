import React from 'react';
import {FooterContainer} from './footer'
import '../../App.css';
import img from './ex-.jpg'


export default function wedding() {

  return(
    <center>
     <h1 className='travel'>Travel</h1>
    
     <div style={{display: 'flex', lineHeight: '40px',justifyContent:'centre', alignItems: 'centre',backgroundColor:'white' ,marginbottom: '70px'}}>
     
<view style={{padding:'70px',justifyContent:'space-around'}}>
<p > <b>Let us help you create your perfect
Travel EXPERIENCE &nbsp;&nbsp;</b></p>
<p1>With our knowledge of the Bel Paese, we will create a day you will always remember. Whether your ceremony and reception are religious or civil, intimate or large we will make sure each client’s unique vision is spectacular and the remnant of you.{' '}</p1>
<p2>Our team will ensure your event runs smoothly and your day is worry-free. From coordinating travel and accommodations for you and your guests to knowing the ins and outs of all the hidden gems in this beautiful city, we will have you covered in creating the most memorable wedding day imaginable.</p2>

  </view>




  
</div>
<div className="btmtxt">
      
       <a href="hhttp://localhost:3000/contact-us" className="sloopscript"> EXPLORE THE WORLD</a>
    </div>
    
  

  
  <FooterContainer />

     </center>
  );
}