import React from 'react';
import "./Footer.css";
export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-parent'>
        <img src={require('../../assets/Home/shape-bg.png')}//.defalut if not occurs 
        alt='no internet connection'/>
      </div>
    </div>
  )
}
