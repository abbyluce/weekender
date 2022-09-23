import './NavBar.css'
import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
    <div className="nav-buttons">
        <Link to="/all-trips">
            <button className="nav-button">VIEW ALL TRIPS</button>
        </Link>
        <button className="nav-button">ABOUT WEEKENDER</button>
        <button className="nav-button">SAVED FAVORITES</button>
    </div>
    )
}

export default NavBar