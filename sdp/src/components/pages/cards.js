import React from 'react'; 
import './Cards.css'; 
import CardItem from './CardItems'; 
 
function Cards() { 
  return ( 
    <div className='cards'> 
      <h1>Check out these Elegant options!</h1> 
      <div className='cards__container'> 
        <div className='cards__wrapper'> 
          <ul className='cards__items'> 
            <CardItem 
              src='Property.jfif' 
              text='Explore all the eminities of JMC Arka' 
              label='Best Seller' 
              path='/services' 
            /> 
            <CardItem 
              src='images/img-2.jpg' 
              text='Check out the new self sufficient city of Vijayawada' 
              label='self-sufficient' 
              path='/services' 
            /> 
          </ul> 
          <ul className='cards__items'> 
            <CardItem 
              src='images/img-3.jpg' 
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters' 
              label='Mystery' 
              path='/services' 
            /> 
            <CardItem 
              src='images/img-1.jpg' 
              text='Experience the new way of living!' 
              label='Adventure' 
              path='/products' 
            /> 
            <CardItem 
              src='images/img-2.jpg' 
              text='Ride through the Sahara Desert on a guided camel tour' 
              label='Adrenaline' 
              path='/sign-up' 
            /> 
          </ul> 
        </div> 
      </div> 
    </div> 
  ); 
} 
 
export default Cards;