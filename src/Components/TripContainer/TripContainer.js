import './TripContainer.css'
import React from 'react'
import Card from '../Card/Card'
import Form from '../Form/Form'
import Logo from '../Logo/Logo'
import { Link } from 'react-scroll'
import arrow from '../../images/arrow.png'
import PropTypes from 'prop-types'

const TripContainer = ({trips, filterTrips, filteredTrips, clearState}) => {

    let tripList 
    if (filteredTrips.length) {
        tripList = filteredTrips.map(trip => {
        const {id, city_image, city_name, hours_from_denver} = trip
        return <Card 
        key={id}
        id={id}
        cityImage={city_image}
        cityName={city_name}
        hoursFromDenver={hours_from_denver} 
        />
        })
    } else {
        tripList = trips.map(trip => {
        const {id, city_image, city_name, hours_from_denver} = trip
        return <Card 
        key={id}
        id={id}
        cityImage={city_image}
        cityName={city_name}
        hoursFromDenver={hours_from_denver} 
        />  
        })
    }

    return (
        <div id="top">
            <Logo clearState={clearState} />
            <div className="trip-container-header">
                <h2 className="trip-container-title">ALL WEEKEND TRIPS</h2>
            </div>
            <Form filterTrips={filterTrips}/>
            <div className="trip-container">
            {tripList}
            </div>
            <div className="footer-bar">
                <Link to="top" offset={-200} spy={true} smooth={true}>
                    <img src={arrow} alt='arrow' className='bottom-arrow' />
                </Link>
            </div>
        </div>
    )
}

export default TripContainer 

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

TripContainer.propTypes = {
    trips: PropTypes.arrayOf(PropTypes.shape(tripsShape)).isRequired,
    filterTrips: PropTypes.elementType,
    filteredTrips: PropTypes.arrayOf(PropTypes.shape(tripsShape)).isRequired,
    clearState: PropTypes.elementType
  }
