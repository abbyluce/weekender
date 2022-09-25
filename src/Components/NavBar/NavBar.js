import './NavBar.css'
import React from "react"
import { Link } from "react-router-dom"

const NavBar = ({clearState}) => {
    return (
    <div className="nav-buttons">
        <Link to="/all-trips">
            <button className="nav-button" onClick={() => clearState()}>VIEW ALL TRIPS</button>
        </Link>
        <Link to="/about">
            <button className="nav-button">ABOUT WEEKENDER</button>
        </Link>
        <Link to="/favorites">
            <button className="nav-button">SAVED FAVORITES</button>
        </Link>
    </div>
    )
}

export default NavBar