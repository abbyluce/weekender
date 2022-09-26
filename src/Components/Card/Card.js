import React from 'react'
import './Card.css'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

const Card = ({id, cityImage, cityName, hoursFromDenver}) => {
 
    return (
        <Link to={`${id}`} className="trip-card">
        <div className="card"
            style={{
            backgroundImage: `url(${cityImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px"
            }}>
            <h5 className="city-name-card">{cityName}</h5>
            <p className="card-p">DRIVE TIME FROM DENVER:
            <br></br>
            {hoursFromDenver} HOURS
            </p>
            <button className="view-details-card-button">
            VIEW DETAILS
            </button>
      </div>
      </Link>
    )

}

export default Card

Card.propTypes = {
    id: PropTypes.string,
    cityName: PropTypes.string,
    cityImage: PropTypes.string,
    hoursFromDenver: PropTypes.number,
}