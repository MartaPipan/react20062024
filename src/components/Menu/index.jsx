import React from 'react';
import { NavLink } from "react-router-dom";

const Menu
    = () => {
    return (
        <nav>
          <ul>
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/users">users</NavLink></li>
            <li><NavLink to="/counter">counter</NavLink></li>
          </ul>  
        </nav>
    );
}

export default Menu;
