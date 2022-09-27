import React from 'react';
import about from '../assets/about-heading.jpg';

const About = () => {
   return (
      <div className='About-container'>
         <img className='Image-heading' src={about} alt="About Us"/>
         <div className='Centered-heading'>
            <h4 className='Sub-title'>About Us</h4>
            <h2 className='Main-title'>Our Company</h2>
         </div>
      </div>
  )
}

export default About;