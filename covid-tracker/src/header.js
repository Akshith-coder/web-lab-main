import React from 'react'
import { NavLink } from "react-router-dom";
import "./index.css"

const style={
    color:"white",
    display:"flex",
    flex:1,
    fontSize:"20px"
}
const isActive ={
    color:"green"
}
export default function Header() {
    return (

        <div id="header" style={style}>
            <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li>
            <NavLink exact to="/" activeStyle={isActive}>Home</NavLink></li>
            <li><NavLink to="/about" activeStyle={isActive}>About Us</NavLink></li>
            </ul>  </nav>
           
        </div>
    )
}
