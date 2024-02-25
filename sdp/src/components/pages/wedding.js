import React from 'react';
  import './Cards.css'; 
  import CardItem from './CardItems'; 
  import d1 from './hw.jpg';
  import d2 from './mw.jpg';
  import d3 from './cw.jpg';
  import d4 from './sw.jpg';
  import d6 from './bw.jpg';
  import { FooterContainer } from './footer'
  
import img from './ex2.jpg'
import background from './video.mp4'


export default function wedding() {
  
  return (
    <center>
  <>
  <video className='videoTag' autoPlay loop muted style={{width:'100%'}}>
    <source src={background} type='video/mp4' />
</video>
      <div className='cards'> 
        <h1>WEDDINGS</h1> 
        <div className='cards__container'> 
          <div className='cards__wrapper'> 
            <ul className='cards__items'> 
              <CardItem 
                src={d1}
                text='A Hindu wedding, known as Vivaha (विवाह; or Vivaaha) in Sanskrit, or Lagna (लग्न) or Kalyanam (कळ्याणम्) is the traditional wedding ceremony for Hindus. The wedding ceremonies are very colourful, and celebrations may extend for several days.' 
                label='HINDU' 
                path='/services' 
              /> 
              <CardItem 
                src={d3} 
                text='A Christian wedding ceremony is an important occasion that reflects their beliefs about the nature of marriage; as a result, it has many symbolic elements. The ceremony will usually start when the bride enters the church. She will wear a white dress, which symbolises purity.' 
                label='CHRISTIAN' 
                path='/services' 
              /> 
            </ul> 
            <ul className='cards__items'> 
              <CardItem 
                src={d4}
                text='The marriage ceremony takes place at a congregational gathering in the holy presence of Guru Granth Sahib. Shabads (Sikh hymns) are sung and the boy and the girl sit side by side facing Guru Granth Sahib' 
                label='SIKH' 
                path='/services' 
              /> 
              <CardItem 
                src={d2} 
                text=' Muslim wedding ceremony is known as a nikah, and is usually a simple ceremony. The bride does not have to be present as long as she sends two witnesses to the drawn-up agreement. Normally, the ceremony consists of readings from the Quran and the exchange of vows in front of witnesses for both partners' 
                label='MUSLIM' 
                path='/products' 
              /> 
              <CardItem 
                src={d6} 
                text='The ceremony lasts about half an hour, during which time ordained monks chant from Buddhist sacred texts in the Pali language. ' 
                label='BUDDHISM' 
                path='/sign-up' 
              /> 
            </ul> 
          </div> 
        </div> 
      </div> 
 
  
<div style={{display: 'flex', lineHeight: '40px',justifyContent:'center', alignItems: 'center',backgroundColor:'white'}}>
<img src={img} class="left "   width="300%" length="10%"></img>
<view style={{padding:'70px',justifyContent:'space-around'}}>
<p > <b>Let us help you create your perfect
WEDDING EXPERIENCE &nbsp;&nbsp;</b></p>
<p1>With our knowledge of the Bel Paese, we will create a day you will always remember. Whether your ceremony and reception are religious or civil, intimate or large we will make sure each client’s unique vision is spectacular and the remnant of you.{' '}</p1>
<p2>Our team will ensure your event runs smoothly and your day is worry-free. From coordinating travel and accommodations for you and your guests to knowing the ins and outs of all the hidden gems in this beautiful city, we will have you covered in creating the most memorable wedding day imaginable.</p2>
  </view>



  
</div>


  </>  
  <p>__________________________________________________________________</p>
  <div style={{display: 'flex', lineHeight: '40px',justifyContent:'center', alignItems: 'center',backgroundColor:'white'}}>
  <view style={{padding:'70px',justifyContent:'space-around'}}>

<div class="d-1of3 m-all t-1of3">
  <h4 class="title">Our Portfolio</h4>
  <h3 class="single-title">Discover the Beauty</h3> 
  <a href=" " class="buttonbox">Get Inspired</a></div>


</view>
  </div>
  <div class="d-3of5-l m-all t-3of5 last-col">
    <div >
    <img src={''}></img>      
    </div>
    <div >

    </div>
    </div>
    <div className="btmtxt">
      <h4>ARE YOU READY TO BE SWEPT AWAY?</h4>
       <a href="hhttp://localhost:3000/contact-us" className="sloopscript">Let's Meet</a>
    </div>
    <FooterContainer />
  </center>
  

  )
}
