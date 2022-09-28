import React from 'react';
import about from '../assets/about-heading.jpg';

const About = () => {
   return (
      <div className='Heading-container'>
         <div className='Heading-image'>
            <img src={about} alt="About" />
         </div>   
         <div className='Centered-title'>
            <h4 className='Sub-title'>About Us</h4>
            <h2 className='Main-title'>Our Company</h2>
         </div>
      </div>
  )
}

export default About;