import React from "react"

const Header = () => {
   return (
      <div className="Header-container">
         <nav className="Navbar">
            <h2 className="Logo"><em>Levi</em> Clothing</h2>
            <ul className="Nav-list Underline-hover">
               <li>Home</li>
               <li>Products</li>
               <li>Contact Us</li>
               <li>About Us</li>
            </ul>
         </nav>
      </div>
   )
}

export default Header;