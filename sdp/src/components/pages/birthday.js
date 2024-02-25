import React from 'react';
  import './Cards.css'; 
  import CardItem from './CardItems'; 
  import d1 from './B1.jpg';
  import d2 from './B2.jpg';
  import d3 from './B3.jpg';
  import d4 from './B4.jpg';
  import d6 from './B5.jpg';
  import { FooterContainer } from './footer'
  import img from './ex-3.jpg'
  export default function birthday() {
    return ( 
      <center>
        <h1 className='birthday'></h1>
      <div className='cards'> 
        <h1>BIRTHDAY</h1> 
        <div className='cards__container'> 
          <div className='cards__wrapper'> 
            <ul className='cards__items'> 
              <CardItem 
                src={d1}
                text='Your birthday is the beginning of your own personal new year' 
                label='' 
                path='/services' 
              /> 
              <CardItem 
                src={d3} 
                text='May the joy that you have spread in the past come back to you on this day. Wishing you a very happy birthday' 
                label='' 
                path='/services' 
              /> 
            </ul> 
            <ul className='cards__items'> 
              <CardItem 
                src={d4}
                text='Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday!' 
                label='' 
                path='/services' 
              /> 
              <CardItem 
                src={d2} 
                text='Your birthday is the first day of another 365-day journey. Be the shining thread in the beautiful tapestry of the world to make this year the best ever. Enjoy the ride.' 
                label='' 
                path='/products' 
              /> 
              <CardItem 
                src={d6} 
                text='JUST THE WAY YOU LIKE IBirthdays are a new start, a fresh beginning and a time to pursue new endeavors with new goals. Move forward with confidence and courage. You are a very special person. May today and all of your days be amazing' 
                label='' 
                path='/sign-up' 
              /> 
            </ul> 
          </div> 
        </div> 
      </div> 
         
    
         
         <div style={{display: 'flex', lineHeight: '40px',justifyContent:'center', alignItems: 'center',backgroundColor:'white' ,marginbottom: '70px'}}>
     <img src={img} class="left "   width="200%" length="10%"></img>
     <view style={{padding:'70px',justifyContent:'space-around'}}>
     <p > <b>Let us help you create your perfect
     Birthday EXPERIENCE &nbsp;&nbsp;</b></p>
     <p1>With our knowledge of the Bel Paese, we will create a day you will always remember. Whether your ceremony and reception are religious or civil, intimate or large we will make sure each client’s unique vision is spectacular and the remnant of you.{' '}</p1>
     <p2>Our team will ensure your event runs smoothly and your day is worry-free. From coordinating travel and accommodations for you and your guests to knowing the ins and outs of all the hidden gems in this beautiful city, we will have you covered in creating the most memorable wedding day imaginable.</p2>
       </view>
     
     
     
     
       
     </div>
     
         
         <div className="btmtxt">
           <h4>ARE YOU READY TO BE SWEPT AWAY?</h4>
            <a href="hhttp://localhost:3000/contact-us" className="sloopscript">Let's Meet</a>
         </div>
         
       
     
       
       <FooterContainer />
       </center>
       )
       ;
    
  }
  

