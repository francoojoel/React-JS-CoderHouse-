import React from 'react';
import contact from '../../assets/contact-heading.jpg';

const Contact = () => {
  return (
    <div className='Heading-container'>
      <div className='Heading-image'>
          <img src={contact} alt="Contact" />
      </div>   
      <div className='Centered-title'>
          <h4 className='Sub-title'>Contact Us</h4>
          <h2 className='Main-title'>Let’s get in touch</h2>
        </div>
    </div>
  )
}

export default Contact;