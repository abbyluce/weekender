import './Logo.css'
import { Link } from "react-router-dom"
import React from 'react'
import logo from '../../images/logo_b.png'

const Logo = () => {
return (
    <Link to="/">
    <img src={logo} alt='logo' className='logo-trip-cont' />
    </Link>
)
}

export default Logo