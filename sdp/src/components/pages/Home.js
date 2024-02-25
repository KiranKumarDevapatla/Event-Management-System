import { Grid } from '@material-ui/core';
import React from 'react';
import '../../App.css';
import img from './img-10.jpg'
import img1 from './ex-9.jpg'
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import { FooterContainer } from './footer'



export default function Home() {

  return (
    <center>
    <>
    <title className='home'>SURPRISE PLANNERS
    <br />
    𝐔𝐍𝐅𝐎𝐑𝐆𝐄𝐓𝐓𝐀𝐁𝐋𝐄 𝐌𝐄𝐌𝐎𝐑𝐈𝐄𝐒
    </title>
    <p 
 style={{
     textAlign: 'center',
     fontSize: '20px',
     padding:'40px 200px  100px',
     
     
 }}

    >YOUR
    <p1 className="font-link" style={{fontSize: '60px' }}> &nbsp;Luxury &nbsp;</p1>planners    for
    </p>
    
    <div style={{display: 'flex', lineHeight: '40px',justifyContent:'center', alignItems: 'center',backgroundColor:'lightgrey'}}>
<img src={img1} class="left "   width="200%" length="60%"></img>

  <view style={{padding:'70px',justifyContent:'space-around'}}>
  <h className="font-link" style={{fontSize:'60px'}}> AWESOME EVENT PLANNERS &nbsp;&nbsp;</h>
  
  <h1 >WELCOme</h1>
  <p>Venice’s unique sense of wonder and romance combined with our knowledge of the area will create unforgettable memories for you in a city steeped in culture. Since 2009, Venice Event Planners has been putting together upscale Weddings, Events and Travel Itineraries with thoughtful and personally curated details in the heart of the city.</p>
  </view>

</div>
    <p1
    style={{
        textAlign: 'center',
        fontSize: ' 40px  ',
        padding:'20px 100px 100px 135px',
    }}>Our team understands that a properly executed event can be leveraged to support an organization’s strategic vision, incorporated into a company’s marketing plan,
or used to build networks and client loyalty.</p1>

    <img src={img} class="center "  padding= '400px 200px  100px' width="99%" length="6%"></img>
      <p2
      style={{
        textAlign: 'center',
        fontSize: ' 22px  ',
        padding:'400px 200px  100px'
    }}>Sp approaches every project with meticulous attention to detail and obsessive precision. Regardless of size and scope, we treat your event like a business with clear strategic goals, defined milestones, and a comprehensive plan to ensure that your event is delivered on time and on budget. At Spark, we put your organization first. We learn about your business, we focus on your challenges, and we plan events to support your goals.</p2>
    <ImageSlider slides={SliderData} />
    <FooterContainer />
    </>
    </center>
  );
}
