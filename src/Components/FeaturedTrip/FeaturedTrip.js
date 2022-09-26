import React from "react"
import './FeaturedTrip.css'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

const FeaturedTrip = ({trips}) => {

    let featuredTripIndex = Math.floor(Math.random() * trips.length)
    let featuredTrip = trips[featuredTripIndex]
    
    return trips.length ? (
        <div className="featured" id="featured">
            <div className="title-area" >
                <div className="featured-title-area" style={{
                    backgroundImage: `url(${featuredTrip.city_image})`, 
                    backgroundPosition: "center", 
                    backgroundSize: "cover"}}>
                    <h2 className="featured-trip-title">FEATURED TRIP:</h2>
                    <h4 className="featured-city-name">{featuredTrip.city_name}</h4>
                </div>
                <div className="featured-body">
                <div className="featured-body-photos">
                    <img className="featured-photo" src={featuredTrip.stay_image} alt="airbnb-photo"/>
                    <img className="featured-photo" src={featuredTrip.day_activity_1_image} alt="hike-photo"/>
                    <img className="featured-photo" src={featuredTrip.day_activity_2_image} alt="hike-photo"/>
                </div>
                <p className="featured-body-text">
                    DRIVE TIME FROM DENVER: {featuredTrip.hours_from_denver} HOURS
                </p>
                <Link to={`${featuredTrip.id}`}>
                    <button className="view-details-button">
                        VIEW DETAILS
                    </button>
                </Link>
            </div>
            </div>
            
        </div>
    ) : <h2>Loading...</h2>
}

export default FeaturedTrip

const tripsShape = {
    id: PropTypes.string,
    city_name: PropTypes.string,
    city_image: PropTypes.string,
    city_desc: PropTypes.string,
    stay: PropTypes.string,
    stay_link: PropTypes.string,
    stay_image: PropTypes.string,
    day_activity_1: PropTypes.string,
    day_activity_1_image: PropTypes.string,
    day_activity_2: PropTypes.string,
    day_activity_2_image: PropTypes.string,
    restaurant_1: PropTypes.string,
    restaurant_2: PropTypes.string,
    hours_from_denver: PropTypes.number,
    directions: PropTypes.string
}

FeaturedTrip.propTypes = {
    trips: PropTypes.arrayOf(PropTypes.shape(tripsShape)).isRequired
  }