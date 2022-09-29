import React from "react"
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../Carts/CartWidget";
//import { ItemListContainer } from "../containers/ItemListContainer";

const Header = () => {
   return (
      <div className="Header-container">
         <nav className="Navbar">
            <NavLink to='/'>
               <h2 className="Logo"><em>Levi</em> Footwear</h2>
            </NavLink>
            <ul className="Nav-list Underline-hover">
               <li>
                  <NavLink className='Header-link' to='/'>Home</NavLink>
               </li>
               <li>
                  <NavLink className='Header-link' to='/products'>Our Products</NavLink>
               </li>
               <li>
                  <NavLink className='Header-link' to='/contact'>Contact Us</NavLink>
               </li>
               <li>
                  <NavLink className='Header-link' to='/about'>About Us</NavLink>
               </li>
            </ul>
         </nav>
         <div className="Cart-container">
           <Link className="Cart-link" to='/cart'>
               <CartWidget />
           </Link> 
            {/*<div className="Greeting-info">
               <ItemListContainer greeting="0"/>
            </div>*/}
         </div>
      </div>
   )
}

export default Header;