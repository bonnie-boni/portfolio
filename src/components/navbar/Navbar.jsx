import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__links">
        <div className="navbar__links-logo">
          <h1>MBONI <span>GEORGE</span></h1>
        </div>
        <div className="navbar__links-container">
          <p><a href="#Home">Home</a></p>
          <p><a href="#About">About</a></p>
          <p><a href="#Education">Education</a></p>
          <p><a href="#Projects">Projects</a></p>
          <p><a href="#Contacts">Contacts</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
