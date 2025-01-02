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
            <li><Link className='nav-links' to='/'>Home</Link></li>
            <li><Link className='nav-links' to='/About'>About</Link></li>
            <li><Link className='nav-links' to='/Project'>Project</Link></li>
            <li><Link className='nav-links' to='/Contact'>Contact</Link></li>
        </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar