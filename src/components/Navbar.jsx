import React from 'react'
import './styles.css'
import logo from "../assets/img/logo.jpg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt='logo' className='logo'/>
        <div className='link-container'>
            <a href='' className='available'>Home</a>
            <a className='not-available' data-hover-text="Not available yet">About</a>
            <a className='not-available' data-hover-text="Not available yet">Menu</a>
            <Link to='/reservation' className='available'>Reservations</Link>
            <a className='not-available' data-hover-text="Not available yet">Order Online</a>
            <a className='not-available' data-hover-text="Not available yet">Login</a>
        </div>
    </nav>
  )
}

export default Navbar