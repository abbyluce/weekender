import './TripContainer.css'
import React from 'react'
import Card from '../Card/Card'
import logo from '../../images/logo_b.png'
import Form from '../Form/Form'
import { Link } from "react-router-dom"

const TripContainer = ({trips}) => {

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
            <div className="trip-container-header">
                <h2 className="trip-container-title">ALL WEEKEND TRIPS</h2>
            </div>
            <Form />
            <div className="trip-container">
            {tripList}
            </div>
        </div>
    )
}

export default TripContainer 

{/* <Link to="/">
<img src={logo} alt='logo' className='logo-trip-cont' />
</Link> */}