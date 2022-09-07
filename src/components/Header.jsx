import React from "react"
import CartWidget from "./CartWidget";
//import { ItemListContainer } from "../containers/ItemListContainer";

const Header = () => {
   return (
      <div className="Header-container">
         <nav className="Navbar">
            <h2 className="Logo"><em>Levi</em> Footwear</h2>
            <ul className="Nav-list Underline-hover">
               <li>Home</li>
               <li>Products</li>
               <li>Contact Us</li>
               <li>About Us</li>
            </ul>
         </nav>
         <div className="Cart-container">
            <CartWidget />
            {/*<div className="Greeting-info">
               <ItemListContainer greeting="0"/>
            </div>*/}
         </div>
      </div>
   )
}

export default Header;