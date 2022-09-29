import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';


export const Footer = () => {
   return (
      <div className='Footer-container'>
         <section>
            <div className='Slogan-container'>
               <h2 className='Footer-logo'><em>Levi</em> Footwear</h2>
               <h4 className='Slogan'>Quality and confort</h4>
            </div>
            <div className='Socials'>
               <Link to='https://www.instagram.com/' target='blank' className= 'Social-link'><AiOutlineInstagram /></Link>
               <Link to='https://es-la.facebook.com/' target='blank' className= 'Social-link'><AiOutlineFacebook /></Link>
               <Link to='https://twitter.com/' target='blank' className= 'Social-link'><AiOutlineTwitter /></Link>
               <Link to='https://www.whatsapp.com/?lang=en' target='blank' className= 'Social-link'><AiOutlineWhatsApp /></Link>   
            </div>
         </section>
         <section className='Sitemap-container'>
            <Link to='/' className='Sitemap-link'>Home</Link>
            <Link to= '/products' className='Sitemap-link'>Our Products</Link>
            <Link to='/contact' className='Sitemap-link'>Contact Us</Link>
            <Link to='/about' className='Sitemap-link'>About Us</Link>      
         </section>
         <div className='Section-divider'></div>
         <section className='Copyright-container'>
            <p className='Page-author'>Franco Valenzuela</p>
            <p className='Page-copyright'>©Levi Footwear All Rights Reserved</p>
         </section>
      </div>
   );
}

export default Footer;
