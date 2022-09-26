import './Logo.css'
import { Link } from "react-router-dom"
import React from 'react'
import logo from '../../images/logo_b.png'
import PropTypes from 'prop-types'

const Logo = ({clearState}) => {
return (
    <Link to="/">
    <img src={logo} alt='logo' onClick={() => clearState()} className='logo-trip-cont' />
    </Link>
)
}

export default Logo

Logo.propTypes = {
    clearState: PropTypes.elementType
  }