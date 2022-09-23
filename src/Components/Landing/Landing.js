import './Landing.css'
import React from "react"
import logo from '../../images/logo.png'
import arrow from '../../images/arrow.png'
import { Link } from 'react-scroll'
import NavBar from '../NavBar/NavBar'

const Header = () => {
    return (
        <div className="header">
            <NavBar />
            <img src={logo} alt='logo' className='logo' />
            <div>
                <Link to="featured" offset={150} spy={true} smooth={true} className="featured-link">
                <img src={arrow} alt='arrow' className='arrow bounce' />
                </Link>
            </div>
        </div>
    )
}

export default Header