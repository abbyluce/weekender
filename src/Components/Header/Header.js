import './Header.css'
import React from "react"
import logo from '../../images/logo.png'
import arrow from '../../images/arrow.png'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt='logo' className='logo' />
            <img src={arrow} alt='arrow' className='arrow bounce' />
        </div>
    )
}

export default Header