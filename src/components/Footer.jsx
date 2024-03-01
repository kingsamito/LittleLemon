import React from 'react'
import './styles.css'
import logo from '../assets/img/logo-vertical.png'


const Footer = () => {
    return (
        <footer>
            <div><img src={logo} alt='logo' /></div>
            <div className='site-map'>
                <h1>SITE MAP</h1>
                <div>
                    <a href=''>Home</a>
                    <a href=''>About</a>
                    <a href=''>Menu</a>
                    <a href=''>Reservations</a>
                    <a href=''>Order Online</a>
                    <a href=''>Login</a>
                </div>

            </div>
            <div className='contact'>
                <h1>CONTACT US</h1>
                <p>1234 Ave, X city, Y country</p>
                <p>538-2422-5520</p>
                <p>info@littlelemon.com</p>
            </div>
            <div className='contact-with'>
                <h1>CONTACT US WITH</h1>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>X</p>
            </div>
        </footer>
    )
}

export default Footer