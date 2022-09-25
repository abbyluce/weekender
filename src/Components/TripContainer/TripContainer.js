import './TripContainer.css'
import React from 'react'
import Card from '../Card/Card'
import Form from '../Form/Form'
import Logo from '../Logo/Logo'
import { Link } from 'react-scroll'
import arrow from '../../images/arrow.png'

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

