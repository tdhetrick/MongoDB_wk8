import React from "react";

import {  Link } from "react-router-dom";

function Menu() {
  return (
    
      <nav role="navigation" aria-label="Main menu" itemscope itemType="https://schema.org/SiteNavigationElement" >
        <ul>
            
            <li><Link itemProp="url" to="/" >Homepage</Link></li>
            <li><Link to="/about" >About</Link></li>           
            <li><Link to="/login" rel="nofollow">Login</Link></li>
        </ul>
    </nav>

    
  );
}

export default Menu;
