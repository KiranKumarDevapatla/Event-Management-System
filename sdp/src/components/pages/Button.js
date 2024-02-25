import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <li>
    <Link to='sign-UP'>
      <button className='btn'>Login</button>
    </Link>
    <Link to='register'>
      <button className='btn'>register</button>
    </Link>
    
   
   </li>
  );
}
