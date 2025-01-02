import React from 'react'
import './Navbar.css'
import logo from '../images/caticon.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className="navbar">
        <div className="nav-left">
            <img src={logo} id="icon" alt="loading"/>
        </div>
        <div className="nav-right">
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Project'>Project</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
        </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar