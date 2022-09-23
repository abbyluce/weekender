import './TripContainer.css'
import React from 'react'
import Card from '../Card/Card'
import Form from '../Form/Form'
import Logo from '../Logo/Logo'

const TripContainer = ({trips, filterTrips}) => {

    const tripList = trips.map(trip => {
        const {id, city_image, city_name, hours_from_denver} = trip
        return <Card 
        key={id}
        id={id}
        cityImage={city_image}
        cityName={city_name}
        hoursFromDenver={hours_from_denver} 
        />
    })

    return (
        <div>
            <Logo />
            <div className="trip-container-header">
                <h2 className="trip-container-title">ALL WEEKEND TRIPS</h2>
            </div>
            <Form filterTrips={filterTrips}/>
            <div className="trip-container">
            {tripList}
            </div>
        </div>
    )
}

export default TripContainer 

